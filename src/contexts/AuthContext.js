import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    // eslint-disable-next-line prettier/prettier
    updateProfile
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setcurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        // every signin,login,logout means auth e state change hole eta event callback hisave trigger korbe jar parameter e currentUser obj ta pabo
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setLoading(false);
        });
        return unsubscribe; // new user set korar age clean up korbe age thn new user set dom change hole eta 1 bar e call hoye user set korbe abar login dom e gele  abar call hoye ager effect clean korbe thn onauthchange e new user set kore dibe . evabe dom to dom  jaowar age clean up kore 1 bar e call hoye user select korbe
    }, []);
    // signup function
    async function signup(email, password, userName) {
        const auth = getAuth();
        // request server and signup process done
        await createUserWithEmailAndPassword(auth, email, password);
        // update profile
        await updateProfile(auth.currentUser, {
            displayName: userName,
        });
        const user = auth.currentUser;
        setcurrentUser({
            ...user,
        });
    }
    function login(email, password) {
        const auth = getAuth();
        // login button e click korle erpr handle korbo tai promise ta consume kori nai ekhane just promise return korlam
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        const auth = getAuth();
        signOut(auth);
    }

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        currentUser,
        signup,
        login,
        logout,
    };
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
