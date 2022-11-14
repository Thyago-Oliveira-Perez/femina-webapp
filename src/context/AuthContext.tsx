import { createContext, useContext, useState, useEffect  } from "react";
import {IUser} from "../types/user.types";
import UserApi from "../api/Users.api";
import axios from "axios";

interface AuthContextData {
    userInfo: IUser | undefined;
    signed: boolean;
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
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("user"));
    const [userInfo, setUserInfo] = useState<IUser | undefined>();

    const userApi = new UserApi();

    useEffect(() => {
      const loadingStoreData = () => {
        const storageToken = localStorage.getItem("user");
        if (storageToken) {
          getUserInfo()
          setUserToken(storageToken);
        }
      };
      loadingStoreData();
    }, []);

    const getUserInfo = () => {
      userApi.getUserInfo().then((response: any) => {
        
        setUserInfo(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }
    
    return (
        <AuthContext.Provider value={{ userInfo, signed: !!userToken }}>
          {children}
        </AuthContext.Provider>
    );
};