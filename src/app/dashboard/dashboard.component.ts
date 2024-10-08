import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  totalIncome: number = 0;
  totalExpense: number = 0;
  balance: number = 0;

  ngOnInit() {
    const username = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(
      localStorage.getItem(username + '_data') || '[]'
    );
    this.calculateSummary(userData);
  }
  goBack() {
    history.back();
  }
  calculateSummary(data: any[]) {
    this.totalIncome = data
      .filter((item) => item.type === 'Income')
      .reduce((sum, item) => sum + item.amount, 0);
    this.totalExpense = data
      .filter((item) => item.type === 'Expense')
      .reduce((sum, item) => sum + item.amount, 0);
    this.balance = this.totalIncome - this.totalExpense;
  }
}
