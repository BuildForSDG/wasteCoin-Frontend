import jwt from "jwt-decode";

class Auth {
  constructor() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const jwtDecode = token && jwt(token);
        if (jwtDecode.validated && token && (jwtDecode.exp > (new Date().getTime() / 1000))) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      } catch (error) {
        this.authenticated = false;
      }
    }
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    localStorage.removeItem("token");
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
