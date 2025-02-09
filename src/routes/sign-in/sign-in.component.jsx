import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
 } from "../../utils/firebase/firebase.utils";
 import SignUpForm from '../../components/sign-up/sign-up.component.jsx';

const SignIn = () => {

    const logGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 

    return (
        <div>
            <h1>This is the sign-in page.</h1> 
            <button onClick={logGooglePopup}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    )

}

export default SignIn