import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Fourpointone from './Fourpointone';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
      <Route path="/three" component={Three} />
      <Route exact path="/four" component={Four}></Route>
      <Four>
      <Route path="/Four/:id" component={Fourpointone}></Route>
      </Four>
      <Route path="*" component={NoMatch} />
    </Switch>
  </BrowserRouter>



,
  document.getElementById('root')
);

registerServiceWorker();
