import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [

  // Book List (index)
  // site.com/books
  // {
  //   path: 'books',
  //   component: IndexComponent
  // },

  // Book Detail
  // site.com/books/42
  // {
  //   path: 'books/:id',
  //   component: DetailComponent
  // },
  // {
  //   path: 'books/create',
  //   component: DetailComponent
  // },
  // {
  //   path: 'books/:id/update',
  //   component: DetailComponent
  // },
  // {
  //   path: 'books/:id/delete',
  //   component: DetailComponent
  // },


  {
    path: 'books', // site.com/books
    children: [
      {
        path: '', // site.com/books
        component: IndexComponent
      },

      {
        path: 'create',// site.com/books/create
        component: CreateComponent
      },

      {
        path: ':id', // site.com/books/42
        children: [
          {
            path: '',  // site.com/books/42
            component: DetailComponent
          },
          {
            path: 'update',  // site.com/books/42/update
            component: UpdateComponent
          },
          {
            path: 'delete',  // site.com/books/42/delete
            component: DeleteComponent
          },
        ]
      },
    ]
  }


  // {
  //   path: 'books', // site.com/books
  //   component: IndexComponent
  // },
  // {
  //   path: 'book',
  //   children: [
  //     {
  //       path: '',// site.com/book
  //       component: CreateComponent
  //     },

  //     {
  //       path: ':id', // site.com/book/42
  //       children: [
  //         {
  //           path: '',  // site.com/book/42
  //           component: DetailComponent
  //         },
  //         {
  //           path: 'update',  // site.com/book/42/update
  //           component: UpdateComponent
  //         },
  //         {
  //           path: 'delete',  // site.com/book/42/delete
  //           component: DeleteComponent
  //         },
  //       ]
  //     },
  //   ]
  // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }