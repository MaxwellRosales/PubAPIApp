import React from 'react'

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Mainpage from './components/Mainpage';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
  
      <Switch>
        <Route path='/' exact component={Mainpage} />
      </Switch>

    </HashRouter>

  );
}

export default App;
