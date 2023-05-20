import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firbase.config';

 export const AuthContext = createContext (null)


 const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
 
    //user create account
    const createUser= (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    //user sign in
    const UserSignIn = (email, password) =>{
        return signInWithEmailAndPassword (auth, email, password);
    }
    
    //user add name and photo on registration page
    const updateSignUp = (user, name, photo )=>{
          return updateProfile(user, {
            displayName: name,
            photoURL:photo
        })
    }
    
    //logout
    const userSignOut = () =>{
        return signOut(auth)
    }


    //user observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth, signInUser=>{
            setUser(signInUser)
        })
         return () =>{
            unSubscribe()
        }
    },[])
    
    const authInfo ={
         user,
         createUser,
         UserSignIn,
         updateSignUp,
         userSignOut
    }



    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;