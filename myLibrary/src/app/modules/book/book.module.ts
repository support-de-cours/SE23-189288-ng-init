import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    IndexComponent,
    DetailComponent
  ]
})
export class BookModule { }
