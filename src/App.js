import React from 'react';
import { Route } from 'react-router-dom';

//Authentications
import authStateChanged from './firebase/withEmailAndPassword';

//Pages
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser:null,
    };
  }

  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = authStateChanged(this.currentUserHandler);
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //to prevent memory from leaking
  }

  // To change currentUser state from other pages and Authentication handler function.
  currentUserHandler = (user) => { this.setState({currentUser: user}); }

  render(){
    return (
      <div className="flex flex-col justify-center items-center w-full h-full relative z-10
      before:w-full before:h-full before:content-[''] before:absolute before:-z-10 before:bg-background-pattern before:bg-blue-400/20 before:opacity-10">
        <Route exact path={'/'} component={SignInPage}></Route>
        <Route exact path={'/register'} render={(props) => <SignUpPage currentUserHandler={this.currentUserHandler} currentUser={this.state.currentUser} />}></Route>
      </div>
    )
  }

}

export default App;
