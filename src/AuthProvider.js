import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('site'))
    const navigate = useNavigate()

    const loginAction = async (data) => {
        try {
            const res = await fetch('http://localhost:5173', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(data)
            })
            const response = await res.json()
            if(response.data){
                setUser(response.data.user)
                setToken(response.token)
                localStorage.setItem('site', response.token)
                navigate('/dashboard')
                return;
            }
            throw new Error(response.message)
        } catch (err){
            console.errror(err)
        }
    }

const logOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('site')
    navigate('/login')
}

    return <AuthContext.Provider value={{token, user, loginAction, logOut}}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}