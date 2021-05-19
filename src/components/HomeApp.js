
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import NotifyPage from 'pages/NotifyPage'
import UserCenterPage from 'pages/UserCenter'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import styles from './HomeApp.scss'

const HomeApp = ({ location }) => {
  const isTranslucent = location.pathname !== '/'

  return (
    <div className={styles.root}>
      {isTranslucent && <NavigationBar
        className={styles.navigationBar}
      />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/:id" component={UserCenterPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/notify" component={NotifyPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default HomeApp
