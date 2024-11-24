import { Children, createContext, useState } from "react";

export const AuthContext = createContext();
const Authcnontextprovider = ({children}) => {
    const [user, setuser] = useState('')
   
    return (
       <AuthContext.Provider value={{user, setuser}}>
        {children}
       </AuthContext.Provider>
    )
}

export default Authcnontextprovider