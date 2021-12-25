// eslint-disable-next-line no-unused-vars
import initialization from './fire-config'; //just used to trigger 'initialization' method from fire-config file
import {getAuth, signOut, onAuthStateChanged,
        createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
        signInWithRedirect, getRedirectResult, signInWithPopup,
        GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider,} from 'firebase/auth';

const auth = getAuth();

/* Start: Confirmation Functions */
const zxcvbn = require('zxcvbn');
export const isEmail = (text) => (text.includes('@')&&text.charAt(0)!=='@'&&text.charAt(text.length-1)!=='@'&&text.charAt(text.length-1)!=='.') ? true :  false;
export const isPasswordStrong = (password) => (zxcvbn(password).score===4) ? true : false;
/* End: Confirmation Functions */

/* Start: Global Auth Functions */
//Signout
export const authOut = async () => { const feedback = await signOut(auth);}
//ChangeOnAuthHandler
const authStateChanged = (handler) => { onAuthStateChanged(auth, (user)=>{ handler(user)}); }
/* End: Global Auth Functions */

/* Start: Authentication with Email and Password */
export const authUpWithEmailAndPassword = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    }catch(error){
        console.log(error.code);
    }
}

export const authInWithEmailAndPassword = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    }catch(error){
        console.log(error.code);
    }
}

export const authPasswordRecovery = async (email) => {
    try{
        const feedback = await sendPasswordResetEmail(auth,email);
        return true
    }catch(error){
        console.log(error);
        return false;
    }
}
/* End: Authentication with Email and Password */


/* Start: Authentication with Providers */

//enum of provider
export const Providers = {
    GOOGLE: Symbol('GOOGLE'),
    TWITTER: Symbol('TWITTER'),
    FACEBOOK: Symbol('FACEBOOK'),
}

//Providers
const googleIsProvider = new GoogleAuthProvider();
const facebookIsProvider = new FacebookAuthProvider();
const twitterIsProvider = new TwitterAuthProvider();

/* Redirection method */
export const authWithRedirection= async (providerEnum)=>{
    const provider = providerEnum === Providers.GOOGLE ? googleIsProvider : 
                     providerEnum === Providers.TWITTER ? twitterIsProvider :
                     providerEnum === Providers.FACEBOOK ? facebookIsProvider : null;

    
    await signInWithRedirect(auth, provider);
}

export const authWithRedirectionResult = async () => {
    try{
        const feedbackCredential = await getRedirectResult(auth);
        return feedbackCredential.user;
    }catch(error){
        console.log(error);
    }
}
export default authStateChanged;
