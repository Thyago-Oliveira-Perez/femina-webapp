import { createContext, useContext, useState, useEffect  } from "react";
import AuthService from "../services/auth.service";
import {IUser} from "../types/user.types";
import UserApi from "../api/Users.api";

interface AuthContextData {
    userToken: string;
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
    const api = new UserApi();

    const [userToken, setUserToken] = useState('');
    const [userInfo, setUserInfo] = useState<IUser>();

    const authService = new AuthService();

    if (userToken == null) {
      useEffect(() => {
        setUserToken(authService.getUser().user);
      }, [userToken])
    } else {
      useEffect(() => {
        api.getUserInfo().then((response: any) => {
          setUserInfo(response)
        }).catch((error) => {
          console.log(error);
        })
      }, [userInfo])
    }
    
    return (
        <AuthContext.Provider value={{ userToken, userInfo }}>
          {children}
        </AuthContext.Provider>
    );

};