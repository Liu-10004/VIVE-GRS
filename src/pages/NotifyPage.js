import React from "react";
// import cx from 'classnames'
import baseStyles from "pages/Base.scss";
import Section from "components/Section";
import styles from "./AboutPage.scss";

class NotifyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // eslint-disable-next-line global-require,no-trailing-spaces
    this.imgEle.src = `${require("images/a.jpg")}`;
    this.imgEle.onload = this.onload;
    this.imgEle.onerror = this.onerror;
  }

  onload = () => {
    if (this.imgEle.complete) {
      this.setState({
        loading: false
      });
    }
  };

  onerror = () => {
    this.loading.innerText = "资源加载错误， 请检查网络";
  };

  render() {
    const { loading } = this.state;

    return (
      <div className={baseStyles.root}>
        <div className={styles.content}>
          <Section title="大赛通知" className={styles.section}>
            {loading && <p ref={p => (this.loading = p)}>加载中...</p>}
            <img
              ref={img => (this.imgEle = img)}
              src="../assets/images/a1.jpg"
              className={styles.a1}
              alt="a1"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-1.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-2.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-3.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-4.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-5.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-6.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/notify-7.jpg")}`}
              className={styles.t3}
              alt="t3"
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default NotifyPage;
