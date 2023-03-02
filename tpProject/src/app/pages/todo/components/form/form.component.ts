import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public item: string = '';

  constructor(
    private todoService: TodoService
  ){}

  save(): void
  {
    this.todoService.item = this.item;
    this.item = '';
  }
}
