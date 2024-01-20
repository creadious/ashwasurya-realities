import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentAdmin) => {
            setAdmin(currentAdmin);
            console.log('admin', currentAdmin);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const adminInfo = { admin, loading, signIn, logOut };

    return (
        <AuthContext.Provider value={adminInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;