import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null);

const Gprovider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };
    
    const updateUserProfile =(name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
         photoURL: photo
          })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, Gprovider);
    };
    const signGithub =() =>{
        setLoading(true);
        return signInWithPopup(auth,Gitprovider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signGoogle,
        signGithub,
        updateUserProfile,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
