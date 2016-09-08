import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import and setup sentry
import Raven from 'raven-js';
import { sentry_url } from './data/config';
Raven.config(sentry_url).install();

// try an error and see the sentry report
// console.log(window.doesNotExist.nope);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="/view/:postId" component={Single}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

