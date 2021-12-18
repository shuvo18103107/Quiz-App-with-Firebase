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
        console.log('useeffect call');

        const auth = getAuth();
        // every signin,login,logout means auth e state change hole eta event callback hisave trigger korbe jar parameter e currentUser obj ta pabo
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('useeffect call inside authchange');
            setcurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
        // DOm load howar por useeffect 1 bar e kaj korbe but  ekhane component / ba ei function tar vitore ager state na thakle clean up ta call hobe ex:1st time effect er vitor sob call hocee , signin call hoile onauthchange jehutu new state tai ager state unmount e new user set korci evabe prot auth change e age clean up e new state change kore nichiizs
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
