import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books-service';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  save() {
    if ((this.state = 'add')) {
      this.BooksService.add(this.item);
    } else if (this.state == 'edit') {
      this.BooksService.edit(this.item);
    }else if (this.state == 'remove') {
      this.BooksService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BookItem[] = [];
  item: BookItem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0,
  };
  BooksService = inject(BooksService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.BooksService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0,
    };
    // this.BooksService.add({
    //   id: 4,
    //   title: ' ازمایش',
    //   writer: ' ازمایش',
    //   publisher: ' ازمایش',
    //   price: 1000,
    // });
    // this.dataRefresh()
  }
  edit(books: BookItem) {
    this.item = { ...books };
    this.state = 'edit';
  }
  remove(books:BookItem){
    this.item = { ...books };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
