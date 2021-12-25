import React from 'react';

//components
import { MobileLayout } from '../../components/mobile-layout/mobile-layout-component.jsx';
import { TextContent }  from '../../components/text-content/text-content.component.jsx'
import { TextField }    from '../../components/text-field/text-field.components';
import { Description }  from '../../components/description/description.component.jsx'
import { Button }       from '../../components/button/button.component.jsx'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusSquare , faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

//Functions
//Email Authentications
import { isEmail, authInWithEmailAndPassword, Providers, authWithRedirection, authOut, } from '../../firebase/authentication'

class SignInPage extends React.Component {

    constructor(props){
        super();
        this.props = props;
        this.state={
            email:'',
            password:'',
        };
    }

    buttonTriggered = false;
    buttonDisabled = () => {
      return (
        this.state.email &&
        this.state.password &&
        isEmail(this.state.email) &&
        !this.buttonTriggered
      )
    }

    buttonEventHandler = async (event) => {
      this.buttonTriggered = true;
      const currentUser = await authInWithEmailAndPassword(this.state.email, this.state.password);
      this.currentUserHandler(currentUser);
      setTimeout(() => { this.buttonTriggered = false; }, 500);
    }
    onTextFieldChangeHandler = (event) => { this.setState({[event.target.name]: event.target.value});}
    currentUserHandler = (user) => { this.props.currentUserHandler(user) }

    //Authentication with Providers method
    googleButtonEventHandler = async (event) => { authWithRedirection(Providers.GOOGLE); }
    twitterButtonEventHandler = async (event) => { authWithRedirection(Providers.TWITTER); }
    facebookButtonEventHandler = async (event) => { authWithRedirection(Providers.TWITTER); }

    render(){
        return (
          this.props.currentUser ? <h1 className='text-lg text-center' onClick={authOut}>you are in<br/>click to exit</h1> :
            <MobileLayout className="aspect-[1/1.9] bg-slate-50">
                
                <TextContent
                  headerText="Hello Again!"
                  paragraphText={["Welcome back, you've",<br key={1}/>,"been missed!"]}
                  paragraphTextStyle='text-xl'
                  className='items-center justify-center gap-3 h-48'
                />
    
                <TextField placeholder="Email" type='email' name="email"
                  className={`my-3 ${!this.state.email || isEmail(this.state.email) ? '':'ring-1 text-red-700/50 ring-red-700'}`}
                  onChange={this.onTextFieldChangeHandler}
                />
                
                <TextField placeholder="Password" type='password' name="password"
                  className={`my-3 tracking-wider`}
                  onChange={this.onTextFieldChangeHandler}
                />
                
                <Description className="text-right text-xs w-10/12 mt-1">
                  <a className='focus:text-red-500/90 hover:text-red-500/90 focus:outline-none transition-colors duration-200' href='password-recovery'>Recovery Password</a>
                </Description>
    
                <Button
                  className={` ${ this.buttonDisabled() ? 'bg-red-500/90':'pointer-events-none bg-red-400/80'} w-10/12 my-8 py-3 text-md rounded-md text-white`}
                  onClick={this.buttonEventHandler}
                >Sign in</Button>
                
                <Description className="text-xs w-10/12 my-4">ــــــــــــــــ Or continue with ــــــــــــــــ</Description>
                
                {/* Auth Providers */}
                <div className='w-9/12 flex justify-evenly items-center h-12 mt-1'>
                  <FontAwesomeIcon icon={faGooglePlusSquare}
                    className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in'
                    onClick={this.googleButtonEventHandler}
                  />

                  <FontAwesomeIcon icon={faFacebookSquare}  
                    className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in'
                    onClick={()=>{console.log('faFacebookSquare');}}
                  />

                  <FontAwesomeIcon icon={faTwitterSquare}   
                    className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in'
                    onClick={()=>{console.log('faTwitterSquare');}}
                  />

                </div>
                
                <Description className="text-xs mt-20" >Not a member?
                  <a className='text-red-500/90' href='/register'> Register now</a>
                </Description>

          </MobileLayout>
        );
      }
}

export default SignInPage;