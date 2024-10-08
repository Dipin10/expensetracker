import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(user: { username: string; password: string }) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(username: string, password: string) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(
      (user: any) => user.username === username && user.password === password
    );
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
