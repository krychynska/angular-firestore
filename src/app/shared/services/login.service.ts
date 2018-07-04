import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(data) {
    localStorage.setItem('username', data.username);
    return true;
  }
}
