import { createContext, useContext, useState, useEffect  } from "react";
import AuthService from "../services/auth.service";
import {IUser} from "../types/user.types";
import UserApi from "../api/Users.api";
import {Api} from "../api/Api";
import axios from "axios";

interface AuthContextData {
    userToken: string | null;
    userInfo: IUser | undefined;
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
    const [userToken, setUserToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<IUser | undefined>();
    
    const authService = new AuthService();
    const userApi = new UserApi();

    useEffect(() => {
      userApi.getUserInfo().then((response: any) => {
        setUserInfo(response);
      }).catch((error) => {
        console.log(error);
      })
    }, [])

    useEffect(() => {
      setUserToken(authService.getUser())
    }, [])

    console.log('desgraça -> ', userToken)
    
    return (
        <AuthContext.Provider value={{ userToken, userInfo }}>
          {children}
        </AuthContext.Provider>
    );
};