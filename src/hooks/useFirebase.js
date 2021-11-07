/* eslint-disable react-hooks/exhaustive-deps */
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return unsubcribed;
  }, []);
  return {
    signInUsingGoogle,
    user,
    error,
    logOut,
    isLoading,
    setIsloading,
    setError,
  };
};

export default useFirebase;
