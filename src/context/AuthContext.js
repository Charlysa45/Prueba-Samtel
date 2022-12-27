import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null)
    

    useEffect(() => {
      const loggedUser = window.localStorage.getItem('loggedUserOnApp')

      if (loggedUser) {
        const user = JSON.parse(loggedUser)
        setAuth(user)
        navigate('/Home')
      }
    
    }, [navigate])

    const logout = () => {
        window.localStorage.removeItem('loggedUserOnApp')
        navigate('/');
    }
    
    const data = {auth, logout};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
} 

export {AuthProvider}
export default AuthContext