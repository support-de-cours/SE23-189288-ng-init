import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { MainComponent } from './page/main/main.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { ContactModule } from '../contact/contact.module';


@NgModule({
  declarations: [
    MainComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    TodoRoutingModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class TodoModule { }
