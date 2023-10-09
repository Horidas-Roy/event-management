/* eslint-disable react/prop-types */
import {createContext } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext=createContext(null);
      const auth=getAuth(app);
      const googleProvider=new GoogleAuthProvider();
      const gitHubProvider=new GithubAuthProvider();

     const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }
    
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const gitHubSignIn=()=>{
        return signInWithPopup(auth,gitHubProvider)
    }

    const authInfo={
        createUser,
        SignInUser,
        googleSignIn,
        gitHubSignIn,

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;