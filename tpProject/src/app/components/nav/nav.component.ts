import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/">Homepage</a></li>
      <li><a routerLink="/todolist">Todo List</a></li>
      <li><a routerLink="/contact">Contact</a></li>
    </ul>
  </nav>
  `,
})
export class NavComponent {}
