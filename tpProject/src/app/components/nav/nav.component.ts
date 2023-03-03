import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/homepage">Homepage</a></li>
      <li><a routerLink="/todolist">Todo List</a></li>
      <li><a routerLink="/contact">Contact</a></li>
      <li><a routerLink="/page-a">Page-a</a></li>
      <li><a routerLink="/page-b">Page-b</a></li>
    </ul>
  </nav>
  `,
})
export class NavComponent {}
