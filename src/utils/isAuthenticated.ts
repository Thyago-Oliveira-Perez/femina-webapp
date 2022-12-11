import jwt_decode from "jwt-decode";

export default function isAuthenticated() {
    const token = JSON.parse(localStorage.getItem('user') as string);
    
    if (!token) {
      return false;
    }
    
    const { exp }: any = jwt_decode(token.accessToken);
    
    if (Date.now() >= exp * 1000) {
      return false;
    }
  
    return true;
}