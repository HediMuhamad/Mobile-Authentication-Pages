import React from 'react';
import { Route } from 'react-router-dom';

import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';


import './App.css';
class App extends React.Component {

  render(){
    return (
      <div className="flex flex-col justify-center items-center w-full h-full relative z-10
      before:w-full before:h-full before:content-[''] before:absolute before:-z-10 before:bg-background-pattern before:bg-blue-400/20 before:opacity-10">
        <Route exact path={'/'} component={SignInPage}></Route>
        <Route exact path={'/register'} component={SignUpPage}></Route>
      </div>
    )
  }

}

export default App;
