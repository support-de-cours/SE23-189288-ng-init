import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
