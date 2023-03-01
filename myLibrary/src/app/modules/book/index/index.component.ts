import { Component } from '@angular/core';

@Component({
  selector: 'book-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  // Mauvaise pratique: ne pas faire
  public books: any[] = [
    // Book 1
    {
      id: 1,
      title: "Book 1 title",
      description: "Book 1 description lorem ipsum dolor sit amet ...",
      price: 10.00
    },

    // Book 2
    {
      id: 2,
      title: "Book 2 title",
      price: 9.99
    },

    // Book 3
    {
      id: 3,
      title: "Book 3 title",
      description: "Book 3 description lorem ipsum dolor sit amet ...",
      price: 42.00
    },
  ];

}
