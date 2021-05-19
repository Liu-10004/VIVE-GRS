import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import Button from "components/Button";
import { school as SCHOOL, member as MEMBER } from "enums/info";
import { FormCard, SchoolCard, MemberCard } from "components/Form";
import { addSchool, fetchSchool, editSchool } from "actions/school";
import styles from "./RegisterPage.scss";
import { member } from "../enums/info";

let MAX_LIMIT_T1 = 2;

const STATUS = {
  1: {
    status: "passed",
    txt: "报名成功"
  },
  0: {
    status: "unpass",
    txt: "报名未成功"
  },
  2: {
    status: "passing",
    txt: "正在审核中"
  }
};

const MAX_LIMIT = 5; // 团队成员数量
const LIMIT = {
  t1: 2,
  t2: 1,
  s1: MAX_LIMIT - MAX_LIMIT_T1
};

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [{ m0: MEMBER }],
      school: SCHOOL,
      submitText: "提交",
      submitDisabled: false,
      editing: true,
      tips: "",
      status: 0,
      isEmpty: true,
      reason: null,
      id: ""
    };

    this.MEMBER_SIZE = 1;
    this.count_t1 = 0;
    this.count_t2 = 0;
    this.count_s1 = 0;
  }

  componentDidMount() {
    this.props.fetchSchool().then(val => {
      let data = val.value;
      let members = data.members;
      let memberList = [];

      if (!members) {
        return;
      }

      //和数据保持一致
      members.forEach((member, index) => {
        if (member.type == "指导老师") {
          this.count_t1 += 1;
        }
        if (member.type == "参赛学生") {
          this.count_s1 += 1;
        }
        memberList.push({
          [`m${index}`]: {
            type: { ...MEMBER.type, value: member.type },
            name: { ...MEMBER.name, value: member.name },
            dept: { ...MEMBER.dept, value: member.dept },
            phone: { ...MEMBER.phone, value: member.phone },
            identityNum: { ...MEMBER.identityNum, value: member.identityNum }
          }
        });
      });
      this.MEMBER_SIZE = members.length > 0 ? members.length : 1;
      this.setState({
        school: {
          name: { ...SCHOOL, value: data.name },
          dept: { ...SCHOOL, value: data.dept }
        },
        memberList,
        editing: data.status !== 1,
        isEmpty: (members || []).length == 0,
        reason: data.reason,
        status: data.status,
        id: data.id
      });
    });
  }

  submit = () => {
    // eslint-disable-next-line  no-debugger
    // debugger
    const { memberList, school } = this.state;
    const newSchool = school;
    let i = 0;
    let j = 0;
    let tips = "";
    if (this.MEMBER_SIZE < 2 || this.count_t1 === 0) {
      tips = "团队成员总人数为2-5人，指导老师为1-2名";

      this.setState({ tips });
      return;
    }

    const newMemberList = memberList.map((member, idx) => {
      let memberInfo = member[`m${idx}`];

      Object.keys(memberInfo).forEach(key => {
        const field = memberInfo[key];
        // eslint-disable-next-line  no-debugger
        // debugger

        if (
          this.isEmpty(field.value) ||
          !this.isValidate(key, field.validator, field.value)
        ) {
          i += 1;
          memberInfo = {
            ...memberInfo,
            [key]: { ...memberInfo[key], error: true }
          };
          tips = "信息填写有误，请检查";
        }
      });

      return { [`m${idx}`]: memberInfo };
    });

    Object.keys(newSchool).forEach(key => {
      const field = newSchool[key];

      if (
        this.isEmpty(field.value) ||
        !this.isValidate(key, field.validator, field.value)
      ) {
        j += 1;
        tips = "信息填写有误，请检查";
        newSchool[key] = { ...field, error: true };
      }
    });

    //校验身份证不能重复
    let identityNums = [];
    newMemberList.forEach((member, idx) => {
      let idNum = Object.values(member)[0].identityNum.value;
      identityNums.push(idNum);
    });
    let newIdentityNums = [...new Set(identityNums)];
    if (newIdentityNums < identityNums) {
      return this.setState({ tips: "身份证不能重复" });
    }

    if (i > 0 || j > 0) {
      // 高亮显示
      this.setState({
        school: newSchool,
        memberList: newMemberList,
        tips
      });

      return;
    }

    // 验证通过
    if (i === 0 && j === 0) {
      alert("请检查并确认报名信息，一经审核通过无法修改");
      const members = newMemberList.map((member, idx) =>
        Object.keys(member[`m${idx}`]).reduce(
          (pre, curKey) => ({
            ...pre,
            [curKey]: member[`m${idx}`][curKey].value
          }),
          {}
        )
      );

      const schools = Object.keys(newSchool).reduce(
        (pre, curKey) => ({ ...pre, [curKey]: newSchool[curKey].value }),
        {}
      );

      this.setState({ tips: "" });

      //如果正在审核，使用修改接口
      if (this.state.status == 2) {
        this.props
          .editSchool({ ...schools, members, id: this.state.id })
          .then(() => {
            this.setState({
              submitText: "提交成功，等待审核",
              submitDisabled: true
            });
            this.props.onCloseModal();
            this.props.update();
          })
          .catch(error => {
            if (error.message == "请求数据格式验证失败") {
              alert(`提交失败，${error.help}`);
            }
          });
      } else {
        //否则使用添加接口
        this.props
          .addSchool({ ...schools, members })
          .then(() => {
            this.setState({
              submitText: "提交成功，等待审核",
              submitDisabled: true
            });
            this.props.onCloseModal();
            this.props.update();
          })
          .catch(error => {
            if (error.message == "请求数据格式验证失败") {
              alert(`提交失败，${error.help}`);
            }
          });
      }
    }
  };

  // 填写学校信息
  addSchoolInfo = reg => {
    // eslint-disable-next-line  no-debugger
    // debugger
    const { school } = this.state;
    const { field, value } = reg;

    this.setState({
      school: { ...school, [field]: { ...school[field], value, error: false } }
    });
  };

  // 填写团队成员信息
  addMemberInfo = (index, reg) => {
    const { memberList } = this.state;
    const { field, value } = reg;
    const newMember = memberList[index];
    let newMemberList = memberList;
    let memberInfo = newMember[`m${index}`];

    memberInfo = {
      ...memberInfo,
      [field]: { ...memberInfo[field], value, error: false }
    };
    newMemberList[index] = { ...newMember, [`m${index}`]: memberInfo };

    if (field === "type") {
      // 填写成员身份
      newMemberList = this.validateType(memberList);
    }

    this.setState({ memberList: newMemberList });
  };

  //删除一条数据
  delMemberInfo = index => {
    const { memberList } = this.state;
    let newMemberList = memberList.filter((member, idx) => {
      if (idx == index) {
        let currentValue = member[`m${index}`].type.value;
        if (currentValue == "指导老师") {
          this.count_t1 -= 1;
        } else if (currentValue == "参赛学生") {
          this.count_s1 -= 1;
        }
      }
      return Object.keys(member)[0] !== `m${index}`;
    });
    this.MEMBER_SIZE -= 1;
    let newList = newMemberList.map((member, index) => {
      return { [`m${index}`]: Object.values(member)[0] };
    });
    this.setState({
      memberList: newList
    });
  };

  addMember = () => {
    const { memberList } = this.state;
    const newMemberList = memberList.concat({
      [`m${memberList.length}`]: MEMBER
    });

    this.MEMBER_SIZE += 1;
    this.setState({ memberList: this.validateType(newMemberList), tips: "" });
  };
  // 是否为空
  isEmpty = value => !value || (value && value.trim().length === 0);

  // 是否符合要求
  isValidate = (field, regx, value) => {
    if (field === "type" || !regx) return true;
    if (regx && !value) return false;

    let regxStr = null;

    // 验证
    if (field === "identityNum") {
      regxStr = regx;
    } else {
      regxStr = new RegExp(regx);
    }

    return regxStr.test(value);
  };

  validateType = members => {
    // eslint-disable-next-line  no-debugger
    // debugger
    this.count_t1 = 0;
    this.count_t2 = 0;
    this.count_s1 = 0;

    members.forEach((item, idx) => {
      const memberType = item[`m${idx}`].type;

      if (memberType.value === "指导老师") {
        this.count_t1 += 1;
      }

      // if (memberType.value === '参赛老师') {
      //   this.count_t2 += 1
      // }

      if (memberType.value === "参赛学生") {
        this.count_s1 += 1;
      }
    });

    members.forEach((item, idx) => {
      const member = item[`m${idx}`];
      const memberType = member.type;
      let newValidator = memberType.validator;
      const validatorSet = new Set(newValidator.split("|"));

      if (this.count_t1 >= MAX_LIMIT_T1) {
        validatorSet.delete("指导老师");
      }

      // if (this.count_t2 >= LIMIT.t2) {
      //   validatorSet.delete('参赛老师')
      // }

      if (this.count_s1 >= LIMIT.s1) {
        validatorSet.delete("参赛学生");
      }

      if (this.count_t1 <= 1) {
        validatorSet.add("指导老师");
      }

      // if (this.count_t2 === 0) {
      //   validatorSet.add('参赛老师')
      // }

      if (this.count_s1 <= LIMIT.s1) {
        validatorSet.add("参赛学生");
      }

      newValidator = Array.from(validatorSet).join("|");
      // eslint-disable-next-line  no-param-reassign
      item[`m${idx}`].type = { ...memberType, validator: newValidator };
    });

    return members;
  };

  render() {
    const { className } = this.props;
    const {
      editing,
      submitText,
      submitDisabled,
      school,
      memberList,
      tips,
      isEmpty,
      status,
      reason
    } = this.state;
    const isLimit = MAX_LIMIT <= memberList.length;

    return (
      <div className={cx(styles.formPage, className)}>
        {!isEmpty && (
          <div className={cx(styles.panel, styles[STATUS[status].status])}>
            <p>{STATUS[status].txt}</p>
            {status === 0 && reason && <span>{reason}</span>}
          </div>
        )}
        <div className={styles.form}>
          <FormCard title="学校信息">
            <SchoolCard
              data={school}
              editable={editing}
              update={this.addSchoolInfo}
            />
          </FormCard>
          <FormCard
            title="团队成员信息"
            tips="(团队成员总人数为2-5人，指导老师为1-2名)"
          >
            {memberList.map((member, idx) => (
              <MemberCard
                key={member.identity}
                index={idx}
                data={member[`m${idx}`]}
                editable={editing}
                del={this.delMemberInfo}
                update={this.addMemberInfo}
              />
            ))}
          </FormCard>
          {(!submitDisabled || !isLimit) && editing && (
            <Button
              className={styles.addButton}
              disabled={isLimit}
              onClick={this.addMember}
            >
              添加团队成员
            </Button>
          )}
          {tips && <span className={styles.errormsg}>{tips}</span>}
        </div>
        {editing && (
          <div className={styles.bottom}>
            <Button
              disabled={submitDisabled}
              onClick={this.submit}
              className={cx(styles.btn, styles.submit)}
            >
              {submitText}
            </Button>
          </div>
        )}
      </div>
    );
  }
}
export default connect(null, { addSchool, fetchSchool, editSchool })(
  RegisterPage
);
