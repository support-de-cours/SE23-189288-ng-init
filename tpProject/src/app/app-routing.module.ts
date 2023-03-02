import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  // Homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // Default
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },

  // Page Not Found
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
