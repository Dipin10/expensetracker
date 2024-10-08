import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-income-expense',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.css'],
})
export class IncomeExpenseComponent {
  description = '';
  amount: number = 0;

  type = 'Income';
  reoccuring = 'Reoccuring';
  editIndex: number = -1;
  data: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchQuery: string = '';
  filteredData: any[] = [];
  date: string = '';
  filterStartDate: string = '';
  filterEndDate: string = '';
  filterType: string = 'All';
  filterReoccuring: string = 'All';

  ngOnInit() {
    const username = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(
      localStorage.getItem(username + '_data') || '[]'
    );
    this.data = userData;
    this.filteredData = this.data;
  }

  onAdd() {
    if (this.editIndex === -1) {
      this.data.push({
        description: this.description,
        amount: this.amount,
        type: this.type,
        reoccuring: this.reoccuring,
        date: this.date,
      });
    } else {
      this.data[this.editIndex] = {
        description: this.description,
        amount: this.amount,
        type: this.type,
        reoccuring: this.reoccuring,
        date: this.date,
      };

      this.editIndex = -1;
    }
    this.saveData();
    this.resetForm();
    this.applyFilter();
  }

  onEdit(index: number) {
    this.editIndex = index;
    const item = this.data[index];
    this.description = item.description;
    this.amount = item.amount;
    this.type = item.type;
    this.reoccuring = item.reoccuring;
    this.date = item.date;
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
    this.saveData();
    this.applyFilter();
  }

  saveData() {
    const username = localStorage.getItem('loggedInUser');
    localStorage.setItem(username + '_data', JSON.stringify(this.data));
    this.applyFilter();
  }

  resetForm() {
    this.description = '';
    this.amount = 0;
    this.type = 'Income';
    this.reoccuring = 'Reoccuring';
    this.date = '';
  }

  applyFilter() {
    this.filteredData = this.data.filter((item) =>
      item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1;
  }

  applyFilterSearch() {
    this.filteredData = this.data.filter((item) => {
      const matchesSearchQuery = item.description
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesType =
        this.filterType === 'All' || item.type === this.filterType;
      const matchesReoccuring =
        this.filterReoccuring === 'All' ||
        item.reoccuring === this.filterReoccuring;

      return matchesSearchQuery && matchesType && matchesReoccuring;
    });
    this.currentPage = 1;
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
  goBack() {
    history.back();
  }
}
