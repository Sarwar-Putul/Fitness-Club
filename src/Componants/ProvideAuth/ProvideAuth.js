import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
// Add your Firebase credentials
if(firebase.apps.length === 0) {firebase.initializeApp({
    apiKey: "AIzaSyBpWRk8fe9dHYbsq7rcjHIGOitnMT1BHuc",
    authDomain: "fitness-club-f3feb.firebaseapp.com",
    projectId: "fitness-club-f3feb",
    storageBucket: "fitness-club-f3feb.appspot.com",
    messagingSenderId: "306469893879",
    appId: "1:306469893879:web:0bd359eb9efba444cc05f2"
});}

export const AuthContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const [firebaseUser, setFirebaseUser] = useState({});
//   const auth = useProvideAuth();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const {displayName, email, photoURL} = user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        };
        console.log(signedInUser)

        setFirebaseUser(signedInUser);
      } else {
        setFirebaseUser({});
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{firebaseUser}}>{children}</AuthContext.Provider>;
}
// export const useAuth = () => {
//     return useContext(authContext);
//   };
//   // Provider hook that creates auth object and handles state
//   function useProvideAuth() {
//     const [user, setUser] = useState(null);
//     // Wrap any Firebase methods we want to use making sure ...
//     // ... to save the user to state.
//     const signin = (email, password) => {
//       return firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((response) => {
//           setUser(response.user);
//           return response.user;
//         });
//     };
//     const signup = (email, password) => {
//       return firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then((response) => {
//           setUser(response.user);
//           return response.user;
//         });
//     };
//     const signout = () => {
//       return firebase
//         .auth()
//         .signOut()
//         .then(() => {
//           setUser(false);
//         });
//     };
//     const sendPasswordResetEmail = (email) => {
//       return firebase
//         .auth()
//         .sendPasswordResetEmail(email)
//         .then(() => {
//           return true;
//         });
//     };
//     const confirmPasswordReset = (code, password) => {
//       return firebase
//         .auth()
//         .confirmPasswordReset(code, password)
//         .then(() => {
//           return true;
//         });
//     };
//     // Subscribe to user on mount
//     // Because this sets state in the callback it will cause any ...
//     // ... component that utilizes this hook to re-render with the ...
//     // ... latest auth object.
//     useEffect(() => {
//       const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           setUser(user);
//         } else {
//           setUser(false);
//         }
//       });
//       // Cleanup subscription on unmount
//       return () => unsubscribe();
//     }, []);
//     // Return the user object and auth methods
//     return {
//       user,
//       signin,
//       signup,
//       signout,
//       sendPasswordResetEmail,
//       confirmPasswordReset,
//     };
//   }