import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  public getStoredUser() {
    let storedUser = sessionStorage.getItem("userName");
    return storedUser ? storedUser : "";
  }

  public storeUser(userName) {
    sessionStorage.setItem("userName", userName);
  }
}
