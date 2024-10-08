import { NgClass, NgStyle, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./back-button.component.scss'],
  imports: [],
  standalone: true,
})
export class BackButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goBack() {
    history.back();
  }
}
