import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firbase.config';

 export const AuthContext = createContext (null)


 const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, useLoader] = useState(true)
    //for google 
    const provider = new GoogleAuthProvider();
    //for github
    const gitHubProvider = new GithubAuthProvider();


    //user create account
    const createUser= (email, password) =>{
        useLoader(true)
        return createUserWithEmailAndPassword (auth, email, password);
    }

    //user sign in
    const UserSignIn = (email, password) =>{
        useLoader(true)
        return signInWithEmailAndPassword (auth, email, password);
    }
    
    //user add name and photo on registration page
    const updateSignUp = (user, name, photo )=>{
          useLoader(true)
          return updateProfile(user, {
            displayName: name,
            photoURL:photo
        })
    }
    
    //logout
    const userSignOut = () =>{
        useLoader(true)
        return signOut(auth)
    }

    //google signIn
    const userGoogleSignIn = () =>{
        useLoader(true)
        return signInWithPopup(auth, provider)
    }

    //for github
     const userGitHubSignIn = () =>{
        useLoader(true)
        return signInWithPopup(auth, gitHubProvider)
     }


    //user observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth, signInUser=>{
            setUser(signInUser)
            useLoader(false)
        })
         return () =>{
            unSubscribe()
        }
    },[])
    
    const authInfo ={
         user,
         loader,
         createUser,
         UserSignIn,
         updateSignUp,
         userSignOut,
         userGoogleSignIn,
         userGitHubSignIn
    }



    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;