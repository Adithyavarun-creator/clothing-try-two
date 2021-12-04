import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCh9oYRYvnkd5OVcPV8-h2uNmc6yS7iqyU",
    authDomain: "crown-clothing-2.firebaseapp.com",
    projectId: "crown-clothing-2",
    storageBucket: "crown-clothing-2.appspot.com",
    messagingSenderId: "1060045039708",
    appId: "1:1060045039708:web:66981ca4613bfe40721e99",
    measurementId: "G-YQRRL0FXNG"
  };
  
export const createUserProfileDocument = async(userAuth,additionaldata) =>{
    //console.log(userAuth);
    if(!userAuth) return

    // const userRef = firestore.doc('users/21scmfjlwnfnf')
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    //console.log(snapShot);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt:'select_account'
})

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;


