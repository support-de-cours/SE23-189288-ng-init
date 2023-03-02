import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    IndexComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ]
})
export class BookModule { }
