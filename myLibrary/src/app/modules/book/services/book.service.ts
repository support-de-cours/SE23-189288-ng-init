import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = new BehaviorSubject<any>([]);
  private book = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient
  ){}

  httpGetAll()
  {
    let url = `${environment.apiEndpoint}books`;
    this.httpClient.get(url).subscribe( data => this.books.next(data) )
  }

  httpGetOne(id: number)
  {
    let url = `${environment.apiEndpoint}books/${id}`;
    this.httpClient.get(url).subscribe( data => this.book.next(data) )    
  }

  get all()
  {
    return this.books;
  }

  get one()
  {
    return this.book;
  }
}
