import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    updatePassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    EmailAuthProvider,
    reauthenticateWithCredential,
  } from "firebase/auth";
  import db from '../index'
  import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
  } from "firebase/firestore";
  
  async function doCreateUserWithEmailAndPassword(email, password, displayName) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: displayName });
    const uid = auth.currentUser.uid;
    return uid;
  }
  
  async function doChangePassword(email, oldPassword, newPassword) {
    const auth = getAuth();
    let credential = EmailAuthProvider.credential(email, oldPassword);
    await reauthenticateWithCredential(auth.currentUser, credential);
  
    await updatePassword(auth.currentUser, newPassword);
    //await doSignOut();
  }
  
  async function doSignInWithEmailAndPassword(email, password) {
    let auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  }
  
  async function doSocialSignIn() {
    let auth = getAuth();
    let socialProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, socialProvider);
    
  }
  
  async function doPasswordReset(email) {
    let auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  }
  
  async function doSignOut() {
    let auth = getAuth();
    await signOut(auth);
  }
  
 
  
  export {
    doCreateUserWithEmailAndPassword,
    doSocialSignIn,
    doSignInWithEmailAndPassword,
    doPasswordReset,
    doSignOut,
    doChangePassword,
  };
