export default class AuthService {
  setLoggedUser(userLogged: any) {
    if (userLogged != null) {
      let parsedData = JSON.stringify(userLogged.data);
      localStorage.setItem("user", parsedData);
    }
  }

  getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return JSON.parse(user).accessToken; 
    }
    return user;
  }

  logoutUser() {
    localStorage.removeItem("user");
  }
}