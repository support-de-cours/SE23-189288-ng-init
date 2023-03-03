import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaybeGuard } from './guards/maybe.guard';
import { NoGuard } from './guards/no.guard';
import { YesGuard } from './guards/yes.guard';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  {
    path: 'page-a',
    component: AComponent,
    canActivate: [YesGuard]
  },

  {
    path: 'page-b',
    component: BComponent,
    canActivate: [MaybeGuard]
  },

  // Default
  // site.com/
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
