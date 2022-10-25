import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;
  constructor() { }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 3000)
    })
    return promise;
  }

}
