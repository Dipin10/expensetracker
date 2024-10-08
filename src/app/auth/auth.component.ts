import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  username = '';
  password = '';

  constructor(private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (this.isLoginMode) {
      const userData = JSON.parse(localStorage.getItem(this.username) || '{}');
      if (userData && userData.password === this.password) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', this.username);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Login failed. Check credentials.');
      }
    } else {
      const user = { username: this.username, password: this.password };
      localStorage.setItem(this.username, JSON.stringify(user));
      alert('Registration successful!');
      this.toggleMode();
    }
  }
}
