import { Component } from '@angular/core';
import { BookInterface } from '../interfaces/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  public books: BookInterface[] = [
    // {
    //   title: "azerty",
    //   cover: "azertyu"
    // }
    {
      title: "azertyu",
      price: 99,
      description: "zertyuio"
    }
  ]
}
