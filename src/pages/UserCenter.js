import React from "react";
import cx from "classnames";
import toJS from "hocs/toJS";
import { connect } from "react-redux";
import { compose } from "redux";
import Section from "components/Section";
import Button from "components/Button";
import { fetchSchool, addSchool } from "actions/school";
import { showLogin } from "actions/user";
import { selectSchoolInfo } from "selectors/school";
import { FormCard, SchoolCard, MemberCard } from "components/Form";
import { school as SCHOOL, member as MEMBER } from "enums/info";
import baseStyles from "pages/Base.scss";
import styles from "./UserCenter.scss";

const LIMIT = {
  t1: 1,
  t2: 1,
  s1: 4
};

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
    txt: "正在审核"
  }
};

class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [],
      school: {},
      submitText: "修改",
      submitDisabled: false,
      editing: false,
      tips: ""
    };

    this.MEMBER_SIZE = 1;
    this.count_t1 = 0;
    this.count_t2 = 0;
    this.count_s1 = 0;
  }

  componentDidMount() {
    const userId = localStorage.getItem("userId");

    // 未进行登录
    if (!userId) {
      showLogin();

      return;
    }

    this.props.fetchSchool(userId).catch(error => {
      if (error.status === 401) {
        this.props.showLogin();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { schoolInfo = {} } = nextProps;
    const isEmpty = JSON.stringify(schoolInfo) === "{}";

    if (!isEmpty) {
      const { members } = schoolInfo;
      let i = 0;
      const memberList = members.map((member, idx) => {
        if (member.type === "指导老师") {
          i += 1;
        }

        return {
          [`m${idx}`]: Object.keys(MEMBER).reduce(
            (pre, curKey) => ({
              ...pre,
              [curKey]: { ...MEMBER[curKey], value: member[curKey] }
            }),
            {}
          )
        };
      });
      const school = Object.keys(SCHOOL).reduce(
        (pre, curKey) => ({
          ...pre,
          [curKey]: { ...SCHOOL[curKey], value: schoolInfo[curKey] }
        }),
        {}
      );

      // 重写成员数量和指导老师数量
      this.MEMBER_SIZE = members.length;
      this.count_t1 = i;
      this.setState({ memberList, school });
    }

    console.log("this.props.schoolInfo", schoolInfo);
  }

  // 修改
  edit = () => {
    const { memberList } = this.state;

    this.validateType(memberList);
    this.setState({
      editing: true,
      submitText: "提交"
    });
  };

  // 提交更改
  submit = () => {
    const { memberList, school } = this.state;
    const newSchool = school;
    let i = 0;
    let j = 0;
    let tips = "";

    if (this.MEMBER_SIZE < 2 || this.count_t1 === 0) {
      tips = "必须有至少2名参赛成员，且其中必须有1名指导老师";

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
      this.props.addSchool({ ...schools, members }).then(() => {
        this.setState({
          submitText: "提交成功，等待审核",
          submitDisabled: true
        });
      });
    }
  };

  // 填写学校信息
  updateSchoolInfo = reg => {
    const { school } = this.state;
    const { field, value } = reg;

    this.setState({
      school: { ...school, [field]: { ...school[field], value, error: false } }
    });
  };

  // 填写团队成员信息
  updateMemberInfo = (index, reg) => {
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

      if (memberType.value === "参赛老师") {
        this.count_t2 += 1;
      }

      if (memberType.value === "参赛学生") {
        this.count_s1 += 1;
      }
    });

    members.forEach((item, idx) => {
      const member = item[`m${idx}`];
      const memberType = member.type;
      let newValidator = memberType.validator;
      const validatorSet = new Set(newValidator.split("|"));

      if (this.count_t1 >= LIMIT.t1) {
        validatorSet.delete("指导老师");
      }

      if (this.count_t2 >= LIMIT.t2) {
        validatorSet.delete("参赛老师");
      }

      if (this.count_s1 >= LIMIT.s1) {
        validatorSet.delete("参赛学生");
      }

      if (this.count_t1 === 0) {
        validatorSet.add("指导老师");
      }

      if (this.count_t2 === 0) {
        validatorSet.add("参赛老师");
      }

      if (this.count_s1 === 0) {
        validatorSet.add("参赛学生");
      }

      newValidator = Array.from(validatorSet).join("|");
      // eslint-disable-next-line  no-param-reassign
      item[`m${idx}`].type = { ...memberType, validator: newValidator };
    });

    return members;
  };

  render() {
    const { schoolInfo } = this.props;
    const {
      editing,
      submitText,
      submitDisabled,
      school,
      memberList,
      tips
    } = this.state;
    const userName = localStorage.getItem("userName");
    const isEmpty =
      JSON.stringify(schoolInfo) === "{}" || JSON.stringify(school) === "{}";
    const statusCode = schoolInfo.status;

    return (
      <div className={baseStyles.root}>
        <div className={cx("container")}>
          {!isEmpty && (
            <div
              className={cx(styles.panel, styles[STATUS[statusCode].status])}
            >
              <p>{STATUS[statusCode].txt}</p>
              {statusCode === 0 && schoolInfo.reason && (
                <span>{schoolInfo.reason}</span>
              )}
            </div>
          )}
          <Section title="个人中心" className={styles.section}>
            <div className={styles.form}>
              <div className={styles.content}>
                <FormCard title="账号">
                  <p className={styles.tips}>{userName}</p>
                </FormCard>
                <FormCard title="学校信息">
                  {isEmpty ? (
                    <p style={{ padding: "16px 0" }}>暂无数据</p>
                  ) : (
                    <SchoolCard
                      data={school}
                      editable={editing}
                      update={this.updateSchoolInfo}
                    />
                  )}
                </FormCard>
                <FormCard title="团队成员信息" tips="(必须有1名为指导教师)">
                  {isEmpty ? (
                    <p style={{ padding: "16px 0" }}>暂无数据</p>
                  ) : (
                    memberList.map((member, idx) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <MemberCard
                        key={member[`m${idx}`].identityNum + idx}
                        index={idx}
                        data={member[`m${idx}`]}
                        editable={editing}
                        update={this.updateMemberInfo}
                      />
                    ))
                  )}
                </FormCard>
                {tips && <span className={styles.errormsg}>{tips}</span>}
                <div className={styles.bottom}>
                  {!isEmpty && statusCode !== 1 && (
                    <Button
                      disabled={submitDisabled}
                      onClick={!editing ? this.edit : this.submit}
                      className={cx(styles.btn, styles.submit)}
                    >
                      {submitText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(
    state => ({
      schoolInfo: selectSchoolInfo(state) || {}
    }),
    {
      fetchSchool,
      addSchool,
      showLogin
    }
  ),
  toJS
)(UserCenter);
