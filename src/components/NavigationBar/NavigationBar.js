/**
 * @see https://github.com/vivedu/VIVEDU-Store/issues/357
 */

import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cx from 'classnames'
import { withRouter, Link } from 'react-router-dom'
import toJS from 'hocs/toJS'
import { logout, fetchUserInfo, showLogin, closeLogin } from 'actions/user'
import { selectUserInfo, selectLoginStatus } from 'selectors/user'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Login from 'components/Login'
import Tab from './Tab'
import styles from './NavigationBar.scss'

const links = [
  {
    link: '/',
    text: '首页',
  },
]

class NavigationBar extends React.Component {

  onSuccess = () => this.props.closeLogin()

  login = () => {
    const { history, fetchUserInfo, showLogin } = this.props
    const userId = localStorage.getItem('userId')

    // 初次进行登录
    if (!userId) {
      showLogin()

      return
    }

    fetchUserInfo(userId)
      .then(() => history.push(`/user/${userId}`))
      .catch((error) => {
        if (error.status === 401) {
          showLogin()
        }
      })
  }

  logout = () => this.props.logout()

  handleCloseModal = () => this.props.closeLogin()

  render() {
    const { userInfo, className, location, translucent, loginShow } = this.props
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    // eslint-disable-next-line no-console
    console.log('userInfo：', userInfo)

    return (
      <div className={cx(styles.root, className, { [styles.translucent]: translucent })}>
        <div className={styles.wrapper}>
          <Link to="/">
            <img
              className={styles.logo}
              // eslint-disable-next-line global-require,no-trailing-spaces
              src={`${require('images/logo.png')}`} 
              // eslint-disable-next-line no-trailing-spaces
              alt="1" 
            />
          </Link>
          <div className={styles.tabs}>
            {links.map(({ link, text }) => {
              const isActive = link === location.pathname

              return (
                <Tab key={link} link={link} active={isActive}>
                  {text}
                </Tab>
              )
            })}
          </div>
        </div>
        <div className={styles.userInfoWrapper}>
          {userId ? (
            <div className={styles.userInfo}>
              <span className={styles.account}>账号：{userName}</span>
              <ul className={styles.userNav}>
                {/* <li>{location.pathname.startsWith('/user/') ? <a className={styles.userCenter}>个人中心</a> : <Link className={styles.userCenter} to={`/user/${userId}`}>个人中心</Link>}</li> */}
                <li><Button className={styles.logout} onClick={this.logout}>退出</Button></li>
              </ul>
            </div>
            ) : (
              <Button className={styles.login} onClick={this.login}>登录</Button>
          )}
          {loginShow && (
            <Modal onCloseModal={this.handleCloseModal}>
              <Login onSuccess={this.onSuccess} />
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(state => ({ userInfo: selectUserInfo(state), loginShow: selectLoginStatus(state) }), {
    logout,
    fetchUserInfo,
    showLogin,
    closeLogin,
  }),
  toJS
)(NavigationBar)
