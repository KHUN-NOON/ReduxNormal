import './App.scss';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Prefrences from './components/Prefrences';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import useToken from './components/App/useToken';
import CounterOne from './components/CounterOne';
import User from './components/User';
import Exercise from './components/Exercise';
import { Provider } from 'react-redux';

function App() {
  const { token, setToken } = useToken()

  if ( !token ) {
    return <Login setToken={setToken}/>
  }

  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/prefrences" component={Prefrences}/>
            <Route exact path="/counterone" component={CounterOne}/>
            <Route exact path="/userlist" component={User}/>
            <Route exact path="/exercise" component={Exercise}/>
            <Route path="*" component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App

