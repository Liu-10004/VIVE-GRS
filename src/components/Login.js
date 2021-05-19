import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { fetchVerifyCode, login } from "actions/user";
import Button from "components/Button";
import Countdown from "components/Countdown";
import styles from "./Login.scss";

const Prompt = ({ status, text }) => (
  <p className={cx({ [styles.error]: status.error })}>{text}</p>
);

const DURATION = 60;
const validatePhone = value => {
  const regExp = new RegExp(/^1[3-9][0-9]\d{8}$/);

  return regExp.test(value);
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: {},
      verifyCode: {},
      verifyCodeButtonText: "获取验证码",
      verifyCodeButtonEnabled: true
    };
  }

  onTimeout = () =>
    this.setState({
      verifyCodeButtonText: "点击重新发送",
      verifyCodeButtonEnabled: true
    });

  getVerifyCode = () => {
    const { fetchVerifyCode } = this.props;
    const { phone } = this.state;

    if (!phone.value || !validatePhone(phone.value)) {
      phone.error = "请填写正确的手机号!";
    } else {
      fetchVerifyCode(phone.value);
      this.setState({ verifyCodeButtonEnabled: false });
    }

    this.setState({ phone });
  };

  handleFieldChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    this.setState({
      [fieldName]: {
        value: fieldValue,
        error: ""
      }
    });
  };

  submit = () => {
    const { verifyCode, phone } = this.state;

    if (!phone.value || !validatePhone(phone.value)) {
      phone.error = "请填写正确的手机号!";
    } else if (!verifyCode.value) {
      verifyCode.error = "验证码不能为空!";
    } else {
      const { login, onSuccess } = this.props;

      login({ phone: phone.value, captcha: verifyCode.value })
        .then(() => {
          onSuccess();
        })
        .catch(() => {
          verifyCode.error = "验证码无效";
        });
    }

    this.setState({ phone, verifyCode });
  };

  render() {
    const {
      phone,
      verifyCode,
      verifyCodeButtonText,
      verifyCodeButtonEnabled
    } = this.state;

    const verifyCodeButtonContent = verifyCodeButtonEnabled ? (
      verifyCodeButtonText
    ) : (
      <span>
        <Countdown duration={DURATION} onTimeout={this.onTimeout} /> 后重新发送
      </span>
    );

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <h1>登录</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.formItem}>
            <p className={styles.label}>手机号</p>
            <input
              className={cx(styles.input, styles.phone)}
              name="phone"
              type="text"
              maxLength={11}
              placeholder="请输入手机号"
              value={phone.value || ""}
              onChange={this.handleFieldChange}
              autoComplete="off"
            />
            <Prompt
              status={{ error: phone.error || false }}
              text={phone.error || ""}
            />
          </div>
          <div className={styles.formItem}>
            <p className={styles.label}>验证码</p>
            <div className={styles.verifyCode}>
              <input
                className={styles.input}
                name="verifyCode"
                type="text"
                maxLength={10}
                placeholder="请输入验证码"
                value={verifyCode.value || ""}
                onChange={this.handleFieldChange}
              />
              {/* eslint-disable-next-line  no-trailing-spaces */}
              <Button
                className={styles.verifyCodeButton}
                disabled={!verifyCodeButtonEnabled}
                onClick={
                  verifyCodeButtonEnabled ? this.getVerifyCode : undefined
                }
              >
                {verifyCodeButtonContent}
              </Button>
            </div>
            <Prompt
              status={{ error: verifyCode.error || false }}
              text={verifyCode.error || ""}
            />
          </div>
          <Button className={styles.login} onClick={this.submit}>
            登录
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  fetchVerifyCode,
  login
})(Login);
