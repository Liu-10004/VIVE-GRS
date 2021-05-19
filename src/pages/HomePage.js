import React from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import cx from "classnames";
import toJS from "hocs/toJS";
import { fetchUserInfo, showLogin, closeLogin } from "actions/user";
import { addSchool, fetchSchool } from "actions/school";
import { selectUserInfo } from "selectors/user";
import Banner from "components/Banner";
import Button from "components/Button";
import NavigationBar from "components/NavigationBar";
import Section from "components/Section";
import Modal from "components/Modal";
import RegisterPage from "components/RegisterPage";
import SVGIcon from "components/SVGIcon";
import styles from "./HomePage.scss";

// const RECOMMEND = 'http://www.jxvredu.com/jxvr/download/赣教高字〔2020〕14号（扫描件）.pdf'

const Code = () => (
  <div className={styles.tips}>
    <p>请联系大赛组委会老师</p>
    <p>姚老师：18779158688</p>
  </div>
);
const Tips = ({ className, tips }) => (
  <div className={cx(styles.tips, className)}>
    <p>{tips}</p>
  </div>
);

const statusMap = {
  0: "报名参赛",
  1: "查看报名信息",
  2: "修改报名信息"
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false,
      notification: "",
      text: "报名参赛"
    };
  }

  componentWillMount() {
    this.fetchSchool();
  }

  update = () => {
    this.fetchSchool();
  };

  fetchSchool = () => {
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);
    if (userId) {
      this.props.fetchSchool().then(val => {
        if (val && val.value && val.value.status) {
          this.setState({
            text: statusMap[val.value.status]
          });
        }
      });
    }
  };

  getCde = () => {
    this.setState({ showNotification: true, notification: <Code /> });
  };

  download = url => {
    if (!url) {
      this.setState({
        showNotification: true,
        notification: <Tips tips="资源更新中，稍后上传" />
      });
    } else {
      window.open(url);
    }
  };

  sign = () => {
    const userId = localStorage.getItem("userId");

    // 初次进行登录
    if (!userId) {
      this.setState({
        showNotification: true,
        notification: (
          <Tips
            className={styles.unAuthorization}
            tips="您还没登录，请先登录再报名"
          />
        )
      });
      // this.props.showLogin()
      return;
    }

    this.props
      .fetchUserInfo(userId)
      .then(data => {
        console.log("data", data);
        this.setState({
          showNotification: true,
          notification: (
            <RegisterPage
              id={data.value.id}
              onCloseModal={() => {
                this.close();
              }}
              update={() => {
                this.update();
              }}
            />
          )
        });
      })
      .catch(error => {
        if (error.status === 401) {
          this.setState({
            showNotification: true,
            notification: (
              <Tips
                className={styles.unAuthorization}
                tips="您还没登录，请先登录再报名！"
              />
            )
          });
          // this.props.showLogin()
        }
      });
  };

  close = () => {
    this.setState({ showNotification: false });
  };

  render() {
    const { showNotification, notification } = this.state;

    return (
      <div className={styles.home}>
        <Banner className={styles.banner}>
          <NavigationBar translucent />
          <div className={styles.slogan}>
            <img
              className={styles.fade}
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("videos/fade.gif")}`}
              // eslint-disable-next-line no-trailing-spaces
              alt="a1"
            />
          </div>
          <Link className={cx(styles.btn, styles.link)} to="/about">
            大赛简介
          </Link>
        </Banner>
        <Section title="大赛流程" className={styles.section1}>
          <div className={styles.box}>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num1)}>1</span>
              <SVGIcon name="step1" width="65" height="65" />
              <div className={styles.desc}>
                <p>注册报名</p>
                <p>2021/5/1-2021/6/30</p>
              </div>
            </div>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num2)}>2</span>
              <SVGIcon name="step2" width="65" height="65" />
              <div className={styles.desc}>
                <p>提交作品</p>
                <p>2021/7/1-2021/8/31</p>
              </div>
            </div>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num3)}>3</span>
              <SVGIcon name="step3" width="65" height="65" />
              <div className={styles.desc}>
                <p>网上初评</p>
                <p>2021/9</p>
              </div>
            </div>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num4)}>4</span>
              <SVGIcon name="step4" width="65" height="65" />
              <div className={styles.desc}>
                <p>网评结果公示</p>
                <p>2021/9</p>
              </div>
            </div>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num5)}>5</span>
              <SVGIcon name="step5" width="65" height="65" />
              <div className={styles.desc}>
                <p>决赛</p>
                <p>2021/10</p>
              </div>
            </div>
            <div className={styles.card}>
              <span className={cx(styles.num, styles.num6)}>6</span>
              <SVGIcon name="step6" width="65" height="65" />
              <div className={styles.desc}>
                <p>比赛结果公布</p>
                <p>2021/10</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              onClick={this.sign}
              className={cx(styles.btn, styles.gameBtn)}
            >
              {this.state.text}
            </Button>
            {/* <p>如需咨询报名事宜，请联系 </p> */}
            {/* <p>张老师 0791-87968589、柴老师 0791-83858322</p> */}
          </div>
        </Section>
        <Section title="资料下载" textColor="#fff" className={styles.section2}>
          <div className={styles.row} style={{ marginTop: "80px" }}>
            <Link
              className={cx(styles.btn, styles.link, styles.specialLink)}
              to="/notify"
            >
              <Button
                onClick={() => {}}
                className={cx(styles.btn, styles.btnReflect)}
              >
                大赛通知
              </Button>
            </Link>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              培训通知
            </Button>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              工具软件下载
            </Button>
            <Button
              onClick={this.getCde}
              className={cx(styles.btn, styles.btnReflect)}
            >
              获取软件激活码
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              软件使用教程
            </Button>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              初赛/决赛通知
            </Button>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              决赛规则
            </Button>
            <Button
              onClick={() => this.download()}
              className={cx(styles.btn, styles.btnReflect)}
            >
              评分标准
            </Button>
          </div>
        </Section>
        <Section title="组织机构" className={styles.section3}>
          <p style={{ fontSize: "26px", fontWeight: "600" }}>主办单位</p>
          <p>江西省教育厅</p>
          <p>江西省工信和信息化厅</p>
          <p>南昌市人民政府</p>
          <p style={{ fontSize: "26px", fontWeight: "600" }}>承办单位</p>
          <p>江西理工大学</p>
          <p>HTC威爱教育</p>
        </Section>
        {showNotification && (
          <Modal onCloseModal={this.close}>{notification}</Modal>
        )}
      </div>
    );
  }
}

export default compose(
  connect(state => ({ userInfo: selectUserInfo(state) }), {
    fetchUserInfo,
    showLogin,
    closeLogin,
    fetchSchool
  }),
  toJS
)(HomePage);
