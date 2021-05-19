/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/97
 */

import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import LazyLoad from 'hocs/LazyLoad'

export const history = createBrowserHistory()

const HomeApp = props => (
  <LazyLoad load={() => System.import('components/HomeApp')} {...props} />
)

const Routes = () => (
  // ConnectedRouter will use the store from Provider automatically
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeApp} />
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
)

export default Routes
