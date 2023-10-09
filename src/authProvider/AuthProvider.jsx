/* eslint-disable react/prop-types */
import {createContext } from "react";

export const AuthContext=createContext(null);

 const AuthProvider = ({children}) => {
    const name="horidas"
    const authInfo={
        name
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;