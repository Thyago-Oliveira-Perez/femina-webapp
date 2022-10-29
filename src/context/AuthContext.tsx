import { createContext, useContext, useState, useEffect  } from "react";
import AuthService from "../services/auth.service";

interface AuthContextData {
    userToken: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
  }: {
    children?: React.ReactNode;
  }) => {
    const [userToken, setUserToken] = useState('');

    const authService = new AuthService();

    if (userToken == null) {
      useEffect(() => {
        setUserToken(authService.getUser().user);
      }, [userToken])
    }
    
    return (
        <AuthContext.Provider value={{userToken}}>
          {children}
        </AuthContext.Provider>
    );

};