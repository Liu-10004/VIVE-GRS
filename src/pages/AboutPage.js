import React from "react";
// import cx from 'classnames'
import baseStyles from "pages/Base.scss";
import Section from "components/Section";
import styles from "./AboutPage.scss";

class AboutPage extends React.Component {
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
          <Section title="大赛介绍" className={styles.section}>
            {loading && <p ref={p => (this.loading = p)}>加载中...</p>}
            <section>
              第一届、第二届高校 VR
              课件设计与制作大赛由江西省教育厅、江西省工业和信息化厅、南昌市人民政府共同主办，HTC威爱、江西理工大学承办，是江西省虚拟现实教育领域水平最高、规模最大、专业性最强的VR课件设计与制作竞赛，全省高校的积极响应，踊跃参赛，掀起运用新技术改革创新人才培养模式的新高潮。
            </section>
            <div className={styles.t1Container}>
              <img
                // eslint-disable-next-line global-require,no-trailing-spaces
                src={`${require("images/t1.png")}`}
                className={styles.t1}
                alt="a1"
              />
              <img
                // eslint-disable-next-line global-require,no-trailing-spaces
                src={`${require("images/t2.png")}`}
                className={styles.t1}
                alt="a1"
              />
            </div>
            <img
              ref={img => (this.imgEle = img)}
              src="../assets/images/a1.jpg"
              className={styles.a1}
              alt="a1"
            />
            <section>
              VR课件大赛积极响应国家发展新兴产业、培养符合行业发展人才的号召，紧跟新时期产业发展步伐，通过师生合作实践，有效推动了虚拟现实等新兴技术进入高校课堂，提升了教师的创新实践能力和融合新技术的科研能力，将虚拟现实等新兴技术与专业人才培养密切融合，掀起了江西省高校探索新技术寻求创新发展的热情，两届大赛共计培训师资400余名，产生400余件优质VR课件内容，有效提高了高校教师掌握新技术的能力，推动了高校教学改革，为后期虚拟现实专业人才培养奠定扎实的基础。
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t3.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <section>
              课件大赛的成功举办，积极推动了江西省高校虚拟现实专业的发展，为积极推动专业建设，在第二届VR课件大赛上，江西省成立虚拟现实教育联盟，为产业发展和人才培养搭建了桥梁。虚拟现实课件大赛让虚拟现实等新兴技术逐步融入课堂教学，为后期专业师资队伍建设和人才培养创造了条件，也为产业发展提供了成果落地的展示舞台。
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t4.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t5.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <h3>大赛精彩回顾：</h3>
            <h4>一、大赛师资培训</h4>
            <section>
              为帮助高校教师掌握虚拟现实（VR）课件制作的技能，针对大赛特举办师资培训，总计培训400余名高校教师，激发了教师参加比赛的热情，为各团队提交优质作品奠定了坚实的基础。
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t6.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t7.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t8.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t9.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <span>（课件大赛师资培训）</span>
            <h4>二、决赛暨颁奖典礼 </h4>
            <p>1、领导致辞</p>
            <section>
              江西省委教育工委委员、省教育厅副厅长汪立夏为两届大赛致辞，在第二届课件大赛决赛现场，汪厅长指出“在连续举办的两届课件制作大赛中，我们注意到虚拟现实技术对教育模式的改革具有重要的助推作用。教学方式慢慢经历了从板书教学到多媒体教学再到沉浸式、情境式教学的转变，越来越多的老师开始尝试将VR等新技术融入课堂教学，越来越多的高校都在尝试建立智慧课堂、虚拟课堂。这些方面不仅仅是科技带来的教育便利，更是教育创新发展的良好机遇，我们一定要抓住机遇，以教育信息化推动实现教育现代化。”
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t10.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <span>2019首届VR课件大赛</span>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t11.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <span>2020年第二届VR课件大赛</span>
            <p>2、现场评审答辩</p>
            <section>
              大赛邀请虚拟现实领域权威专家、高校及科研院所专家、虚拟现实领军企业专家担任评委，评委现场体验参赛作品，并邀请公证人员对大赛进行现场公证，保证大赛公平公正。
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t12.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t13.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t14.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <p>3、参赛团队现场教学展示</p>
            <section>
              现场搭建虚拟现实教学环境，参赛团队根据自己的课件内容进行现场课程授课，将虚拟现实技术真正的用于课堂教学，作品涵盖文史哲、理工农医、经管法、教育、艺术等多个门类，充分展示了虚拟现实在高校专业教学的广泛应用。
            </section>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t15.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t16.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t17.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t18.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t19.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t20.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <p>4、颁奖典礼</p>
            <p>
              经过整个大赛的评比，涌现一大批优秀的课程作品，切实解决的专业教学的难点，在提升教学质量的同时提升了教师的科研能力。
            </p>
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t21.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t22.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t23.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t24.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t25.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t26.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t27.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t28.png")}`}
              className={styles.t3}
              alt="t3"
            />
            <img
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require("images/t29.png")}`}
              className={styles.t3}
              alt="t3"
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default AboutPage;
