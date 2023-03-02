import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './modules/book/book.module';
import { NavComponent } from './components/nav/nav.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // NotFoundComponent,
    // HomepageComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
