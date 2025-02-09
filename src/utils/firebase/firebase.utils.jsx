import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAH7P3-dqAvf3D15TD0DyZESyBtxoHeYds",
    authDomain: "jukkis-ecom.firebaseapp.com",
    projectId: "jukkis-ecom",
    storageBucket: "jukkis-ecom.firebasestorage.app",
    messagingSenderId: "954499027294",
    appId: "1:954499027294:web:93146e99f56c4aa3893fcf",
    measurementId: "G-JBN2RF7Z38"
  };

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
};