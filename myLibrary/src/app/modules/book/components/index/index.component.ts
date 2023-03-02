import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public books: any[] = [];

  constructor(
    private bookService: BookService
  ){
    this.bookService.httpGetAll()
  }

  ngOnInit(): void {
    this.bookService.all.subscribe( data => this.books = data );
  }
}
