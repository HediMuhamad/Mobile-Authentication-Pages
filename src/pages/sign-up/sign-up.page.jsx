import React from 'react';

//components
import { MobileLayout } from '../../components/mobile-layout/mobile-layout-component.jsx';
import { TextContent } from '../../components/text-content/text-content.component.jsx'
import { TextField } from '../../components/text-field/text-field.components';
import { Button } from '../../components/button/button.component.jsx'

//Others
const zxcvbn = require('zxcvbn');


//Functions
export const isEmail = (text) => (text.includes('@')&&text.charAt(0)!=='@'&&text.charAt(text.length-1)!=='@'&&text.charAt(text.length-1)!=='.') ? true :  false;
export const isPasswordStrong = (password) => (zxcvbn(password).score===4) ? true : false;

class SignInPage extends React.Component {

    constructor(){
        super();
        this.state={
            user:'',
            username: '',
            position: '',
            email:'',
            password:'',
            confirm:'',
            securityNote:'',
        };
    }

    buttonDisabled = () => {
        return (
            !this.state.username                          ||
            !this.state.position                          ||
            !this.state.email                             ||
            !isEmail(this.state.email)               ||
            !this.state.password                          ||
            !isPasswordStrong(this.state.password)   ||
            !(this.state.confirm === this.state.password) ||
            !this.state.securityNote
        )
    }

    render(){
        return (
            <MobileLayout className="aspect-[1/1.9] bg-slate-50">
                
                <TextContent
                  headerText="Ah, Nice"
                  paragraphText={["Welcome, we're happy",<br key={1}/>,"to be with you"]}
                  paragraphTextStyle='text-xl'
                  className='items-center justify-center gap-3 h-44'
                />

                <TextField placeholder="Username" type="text" name="username" 
                    className={`my-2`}
                    onChange={(event)=>{this.setState({username:event.target.value})}}
                />
                
                <TextField placeholder="Your Position" type="text" name="position" 
                    className={`my-2`}
                    onChange={(event)=>{this.setState({position:event.target.value})}}
                />
               
                <TextField placeholder="Email" type="email" name="email"
                    className={`my-2 ${!this.state.email || isEmail(this.state.email) ? '':'ring-1 text-red-600/70 ring-red-600/50'}`}
                    onChange={(event)=>{this.setState({email:event.target.value})}}
                />
               
                <TextField placeholder="Password" type="password" name="password" 
                    className={`my-2 ${!this.state.password || isPasswordStrong(this.state.password) ? '':'ring-1 text-red-600/70 ring-red-600/50'}`}
                    onChange={(event)=>{this.setState({password:event.target.value})}}
                />
               
                <TextField placeholder="Confirm" type="password" name="confirm"  
                    className={`my-2 ${(this.state.confirm && this.state.password !== this.state.confirm) ? 'ring-1 text-red-600/70 ring-red-600/50':''}`}
                    onChange={(event)=>{this.setState({confirm:event.target.value})}}
                />
                
                <TextField placeholder="Security Note" type="password"  name="confirm"  
                    className={`my-2`}
                    onChange={(event)=>{this.setState({securityNote:event.target.value})}} 
                />
 
                <Button
                    className={` ${ this.buttonDisabled() ? 'pointer-events-none bg-red-500/50':''} w-10/12 mt-8 mb-2 py-3 text-base rounded-md bg-red-500/90 text-white`}
                    onClick={()=>{console.log('fired');}}
                >Sign up</Button>

            </MobileLayout>
        )
    }
}

export default SignInPage;