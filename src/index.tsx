import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import * as stores from './mobx';

import {Provider} from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import Routes from './routes';

import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'mobx-react-router';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import {router} from './mobx';


Sentry.init({dsn: "https://b4b4bbfc3bf84bddaaa637eb542b8485@o403744.ingest.sentry.io/5266722"});

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider { ...stores}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
