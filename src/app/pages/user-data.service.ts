import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userStorageKey = 'user_profile';

  constructor() { }

  saveUserData(data: any): void {
    localStorage.setItem(this.userStorageKey, JSON.stringify(data));
  }

  getUserData(): any {
    const data = localStorage.getItem(this.userStorageKey);
    return data ? JSON.parse(data) : null;
  }
}
