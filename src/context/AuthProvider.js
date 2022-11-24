import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // sign in with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google
    const googleProviderLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signIn,
        googleProviderLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;