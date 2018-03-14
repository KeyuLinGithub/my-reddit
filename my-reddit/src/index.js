import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './components/store';
import { BrowserRouter, Route } from 'react-router-dom';
import Single from './components/Single';
import Grid from './components/Grid';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <div>
          <Route path='/'  exact={true} component={Grid} />
          <Route path='/post/:postID' component={Single} />
        </div>
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
