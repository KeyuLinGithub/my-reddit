import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './components/store';
import { BrowserRouter, Route } from 'react-router-dom';
import Single from './components/Single';
import Grid from './components/Grid';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route path="/"  exact={true} component={Grid} />
          <Route path="/post/:postID" component={Single} />
        </App>
      </BrowserRouter>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
