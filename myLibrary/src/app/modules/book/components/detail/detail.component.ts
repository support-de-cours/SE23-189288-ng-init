import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: number|null = null;
  public book: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.httpGetOne(this.id);
  }

  ngOnInit(): void {
    this.bookService.one.subscribe(data => this.book = data);
  }
}
