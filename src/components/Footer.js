/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/85
 */

import React from 'react'
import cx from 'classnames'
import styles from './Footer.scss'

const Footer = () => (
  <div className={styles.root}>
    <div className={cx(styles.footer, 'container')}>
      <div className={styles.copyright}>
        <div>
          <img
            // eslint-disable-next-line global-require,no-trailing-spaces
            src={`${require('images/code1.png')}`} 
            // eslint-disable-next-line no-trailing-spaces
            alt="1" 
          />
          <img
            // eslint-disable-next-line global-require,no-trailing-spaces
            src={`${require('images/code2.png')}`} 
            alt="2"
          />
        </div>
        <p>
          2021 VIVEDU|{' '}
          <a
            className={styles.link}
            // eslint-disable-next-line max-len
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52030002001060"
            target="_blank"
            rel="noopener noreferrer"
          >
            | 赣ICP备19014653号-2
          </a>{' '}
        </p>
      </div>
      <div className={styles.divider} />
      <div>
        <div className={styles.contact}>
          <div>
            <p className={styles.row}>友情链接</p>
            <p className={cx(styles.content, styles.marginTop)}>
              <a
                className={styles.link}
                href="http://jxvive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                南昌威爱教育科技有限公司
              </a>
              <a
                className={styles.link}
                href="http://www.jxust.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                江西理工大学
              </a>
            </p>
            <p className={cx(styles.row, styles.marginTop)}>联系我们</p>
            <p className={cx(styles.content, styles.marginTop)}>
              <span className={styles.phone}>联系电话：010-53656211</span>
              <span>邮箱：jxvredu@vivedu.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
