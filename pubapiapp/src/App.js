import React from 'react'

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import mainpage from './compnents/mainpage';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
  
      <Switch>
        <Route path='/' exact component={mainpage} />
      </Switch>

    </HashRouter>

  );
}

export default App;
