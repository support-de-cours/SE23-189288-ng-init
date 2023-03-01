import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexComponent,
    DetailComponent
  ]
})
export class BookModule { }
