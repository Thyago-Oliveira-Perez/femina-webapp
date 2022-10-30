import axios from 'axios';

export default class AuthService {
  setLoggedUser(userLogged: any) {
    if (userLogged != null) {
      let parsedData = JSON.stringify(userLogged);
      localStorage.setItem("user", parsedData);
      
    }
  }

  getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(user).token}`;
      return JSON.parse(user);
      
    }
   
    return user;
  }

  logoutUser() {
    localStorage.removeItem("user");
  }
}