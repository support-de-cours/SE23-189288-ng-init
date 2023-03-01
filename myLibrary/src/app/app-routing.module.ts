import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent as BookDetailComponent } from './modules/book/detail/detail.component';
import { IndexComponent as BookIndexComponent } from './modules/book/index/index.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // Book List (index)
  // site.com/books
  {
    path: 'books',
    component: BookIndexComponent
  },

  // Book Detail
  // site.com/books/42
  {
    path: 'books/:id',
    component: BookDetailComponent
  },


  // Default
  // site.com
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  }


  // Not Found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
