/* eslint-disable react/prop-types */
import {createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null);
      const auth=getAuth(app);
      const googleProvider=new GoogleAuthProvider();
      const gitHubProvider=new GithubAuthProvider();

      

    const AuthProvider = ({children}) => {
        const [user,setUser]=useState();
        const [loading,setLoading]=useState(true);
        const [services,setServices]=useState();

    const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignInUser=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
    }
    
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const gitHubSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setServices(data));

        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
           return unSubscribe();
        }
    },[])

    const authInfo={
        createUser,
        SignInUser,
        googleSignIn,
        gitHubSignIn,
        user,
        logOut,
        loading,
        services


    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;