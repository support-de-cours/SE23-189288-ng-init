import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items: string[] = [];

  constructor(
    private todoService: TodoService
  ){}

  ngOnInit(): void {
    this.todoService.items.subscribe(data => this.items = data);
  }

  delete()
  {
    alert('Delete item');
  }
}
