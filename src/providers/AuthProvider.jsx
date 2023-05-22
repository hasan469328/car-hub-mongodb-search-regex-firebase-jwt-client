import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const gooleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, gooleProvider)
  }

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if(currentUser && currentUser.email){
        const payload = {
          email: currentUser.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("jwt-token", data.token);
          });
      }
      else{
        localStorage.removeItem('jwt-token')
      }
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { auth, user, loader, createUser, signIn, logOut , setLoader, googleSignIn};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
