import { createContext, useContext, useEffect, useState } from "react";
//creates context to hold the authenticationdata
const AuthContext = createContext()
//provides an authentication context to its children
const AuthProvider = ({children}) => {

    //state to hold user's login data
    const [loginData, setLoginData] = useState({})

    //checks if theres a token stored in sessionStorage and sets the login data accordingly
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [children])

    //value provided includes the login data state and the function to update it 
    return (
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook to use the authentication context 
const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }