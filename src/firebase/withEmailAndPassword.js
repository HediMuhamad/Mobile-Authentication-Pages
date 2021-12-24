// eslint-disable-next-line no-unused-vars
import initialization from './fire-config'; //just used to trigger 'initialization' method from fire-config file
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

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

export const authOut = async () => {
    const promiseReturned = await signOut(auth);
    console.log(promiseReturned);
}

const authStateChanged = (handler) => {
    onAuthStateChanged(auth, (user)=>{
        handler(user)
    });
}

export default authStateChanged;
