import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books-service';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit{
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BookItem[] = [];
  BooksService = inject(BooksService);
  dataRefresh() {
    this.data = this.BooksService.list();
  }
  add() {
    this.BooksService.add({
      id: 4,
      title: ' ازمایش',
      writer: ' ازمایش',
      publisher: ' ازمایش',
      price: 1000,
    });
    this.dataRefresh()
  }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
