import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// TODO: Step 1 : Generate Guards
import { YesGuard } from './guards/yes/yes.guard';
import { NoGuard } from './guards/no/no.guard';
import { MaybeYesMaybeNoGuard } from './guards/maybe/maybe-yes-maybe-no.guard';

const routes: Routes = [
  
  // Page A - localhost/page-a
  {
    path: 'page-a',
    component: AComponent,
    canActivate: [
      YesGuard // TODO: Step 2 - Demo with a Guard who say Yes
    ]
  },

  // Page B - localhost/page-b
  {
    path: 'page-b',
    component: BComponent,
    canActivate: [
      NoGuard // TODO: Step 3 - Demo with a Guard who say No
    ]
  },

  // Page C - localhost/page-c
  {
    path: 'page-c',
    component: CComponent,
    canActivate: [
      MaybeYesMaybeNoGuard // TODO: Step 4 - Demo with a Dynamic
    ]
  },

  // Default route
  {
    path: '',
    redirectTo: '/page-a',
    pathMatch: 'full'
  },

  // Wildcard route
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
