import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

   const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }


   useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, loggedUser=>{
        console.log('loggedUser',loggedUser);
        setUser(loggedUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
   },[])



    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;