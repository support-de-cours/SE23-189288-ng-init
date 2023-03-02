import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },


  // Default
  // site.com/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },


  // Not Found / Wildcard route
  // Method : Lazy Loading
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
