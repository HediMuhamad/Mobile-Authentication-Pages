import React from "react";

//Components
import { MobileLayout } from "../../components/mobile-layout/mobile-layout-component";
import { TextContent }  from "../../components/text-content/text-content.component";
import { TextField }    from "../../components/text-field/text-field.components";
import { Button }       from "../../components/button/button.component";
import { Description }  from "../../components/description/description.component";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from '@fortawesome/free-solid-svg-icons'

//Functions
import { isEmail, authPasswordRecovery, authOut } from "../../firebase/authentication";

class PasswordRecovery extends React.Component {
    
    constructor(){
        super()
        this.state={
            email:null,
            linkSent: false,
        }
    }

    onTextFieldChangeHandler = (event) => { this.setState({[event.target.name]:event.target.value}); }
    buttonEventHandler = async (event) => { await authPasswordRecovery(this.state.email) ? this.setState({linkSent: true}) : this.setState({linkSent: false})}
    buttonDisabled = () => { return ( !this.state.email || !isEmail(this.state.email) || this.state.linkSent)}

    render(){
        return (
            this.props.currentUser ? <h1 className='text-lg text-center' onClick={authOut}>you are in<br/>click to exit</h1> :
            <MobileLayout className="aspect-[1/1.9] bg-slate-50 justify-center"> 

                <FontAwesomeIcon icon={faFingerprint}
                    className="text-8xl text-red-500/90"
                />
                
                <TextContent
                  headerText="Don't Worry"
                  paragraphText={["Take your password reset",<br key={1}/>,"link from your email."]}
                  paragraphTextStyle='text-xl'
                  className='items-center justify-center gap-3 h-48'
                />

                <TextField placeholder="Email" type="email" name="email"
                    className={`mb-1 ${!this.state.email || isEmail(this.state.email) ? '':'ring-1 text-red-600/70 ring-red-600/50'}`}
                    onChange={this.onTextFieldChangeHandler}
                />
 
                <Button
                    className={` ${ this.buttonDisabled() ? 'pointer-events-none bg-red-400/80':'bg-red-500/90'} w-10/12 mt-4 mb-2 py-3 text-base rounded-md text-white`}
                    onClick={this.buttonEventHandler}
                >{this.state.linkSent ? 'Link sent' : 'Get link'}</Button>

                <Description className='text-[0.85rem] mt-2'>
                    Did you get the link?
                    <a href="/" className="text-red-500/90 font-semibold"> Sign in</a>
                </Description>

            </MobileLayout>
        )
    }

}

export default PasswordRecovery