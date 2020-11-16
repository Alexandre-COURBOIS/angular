export class AuthService {
  isAuth = false;


  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          },2000
        );
      }
    );
  }

  logOut() {
    this.isAuth = false;
  }

  ifIsLogged() {
    let logStatus = localStorage.getItem('isLogged');

    if (logStatus === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
