import React from 'react';

//Components
import { MobileLayout } from '../../components/mobile-layout/mobile-layout-component.jsx';
import { TextContent }  from '../../components/text-content/text-content.component.jsx'
import { TextField }    from '../../components/text-field/text-field.components';
import { Button }       from '../../components/button/button.component.jsx'
import { Description }  from '../../components/description/description.component.jsx';

//Functions
import { isEmail, isPasswordStrong ,authUpWithEmailAndPassword, authOut } from '../../firebase/authentication'

class SignInPage extends React.Component {

    constructor(props){
        super();

        this.props = props
        this.state={
            username: '',
            position: '',
            email:'',
            password:'',
            confirm:'',
            securityNote:'',
        };
    }


    buttonTriggered = false;
    buttonDisabled = () => {
        return (
            !this.state.username                          ||
            !this.state.position                          ||
            !this.state.email                             ||
            !isEmail(this.state.email)                    ||
            !this.state.password                          ||
            !isPasswordStrong(this.state.password)        ||
            !(this.state.confirm === this.state.password) ||
            !this.state.securityNote                      ||
            this.buttonTriggered
        )
    }

    // Handlers
    buttonEventHandler = async (event) => {
        this.buttonTriggered = true;
        const currentUser = await authUpWithEmailAndPassword(this.state.email, this.state.password);
        this.currentUserHandler(currentUser);
        setTimeout(() => { this.buttonTriggered = false; }, 500);
    }
    onTextFieldChangeHandler = (event) => { this.setState({[event.target.name]:event.target.value}); }
    currentUserHandler = (user) => { this.props.currentUserHandler(user) }
    
    render(){
        return (
            
            this.props.currentUser ? <h1 className='text-lg text-center' onClick={authOut}>you are in<br/>click to exit</h1> :
            <MobileLayout className="aspect-[1/1.9] bg-slate-50">

                <TextContent
                  headerText="Ah, Nice"
                  paragraphText={["Welcome, we're happy",<br key={1}/>,"to be with you"]}
                  paragraphTextStyle='text-xl'
                  className='items-center justify-center gap-3 h-40'
                />

                <TextField placeholder="Username" type="text" name="username" 
                    className={`my-2`}
                    onChange={this.onTextFieldChangeHandler}
                />
                
                <TextField placeholder="Your Position" type="text" name="position" 
                    className={`my-2`}
                    onChange={this.onTextFieldChangeHandler}
                />
               
                <TextField placeholder="Email" type="email" name="email"
                    className={`my-2 ${!this.state.email || isEmail(this.state.email) ? '':'ring-1 text-red-600/70 ring-red-600/50'}`}
                    onChange={this.onTextFieldChangeHandler}
                />
               
                <TextField placeholder="Password" type="password" name="password" 
                    className={`my-2 ${!this.state.password || isPasswordStrong(this.state.password) ? '':'ring-1 text-red-600/70 ring-red-600/50'}`}
                    onChange={this.onTextFieldChangeHandler}
                />
               
                <TextField placeholder="Confirm" type="password" name="confirm"  
                    className={`my-2 ${(this.state.confirm && this.state.password !== this.state.confirm) ? 'ring-1 text-red-600/70 ring-red-600/50':''}`}
                    onChange={this.onTextFieldChangeHandler}
                />
                
                <TextField placeholder="Security Note" type="text"  name="securityNote"  
                    className={`my-2`}
                    onChange={this.onTextFieldChangeHandler} 
                />
 
                <Button
                    className={` ${ this.buttonDisabled() ? 'pointer-events-none bg-red-400/80':'bg-red-500/90'} w-10/12 mt-8 mb-2 py-3 text-base rounded-md text-white`}
                    onClick={this.buttonEventHandler}
                >Sign up</Button>

                <Description className="text-xs mt-1" >Have account?
                  <a className='text-red-500/90' href='/'> Sign in</a>
                </Description>

            </MobileLayout>
        )
    }
}

export default SignInPage;