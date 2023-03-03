import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftComponent as Page_A_LeftComponent } from './components/a/left/left.component';
import { RightComponent as Page_A_RightComponent } from './components/a/right/right.component';

import { LeftComponent as Page_B_LeftComponent } from './components/b/left/left.component';
import { RightComponent as Page_B_RightComponent } from './components/b/right/right.component';

import { LeftComponent as Page_C_LeftComponent } from './components/c/left/left.component';
import { RightComponent as Page_C_RightComponent } from './components/c/right/right.component';

import { LeftComponent as Page_D_LeftComponent } from './components/d/left/left.component';
import { RightComponent as Page_D_RightComponent } from './components/d/right/right.component';

import { LeftComponent as Page_E_LeftComponent } from './components/e/left/left.component';
import { RightComponent as Page_E_RightComponent } from './components/e/right/right.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { FreeGuard } from './guards/free/free.guard';
import { LockerGuard } from './guards/locker/locker.guard';

const routes: Routes = [
  // Page A
  {
    path: 'page-a',
    children: [
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_left',
        component: Page_A_LeftComponent
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_right',
        component: Page_A_RightComponent
      },
    ]
  },

  // Page B
  {
    path: 'page-b',
    children: [
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_left',
        component: Page_B_LeftComponent
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_right',
        component: Page_B_RightComponent
      },
    ]
  },

  // Page C
  {
    path: 'page-c',
    children: [
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_left',
        component: Page_C_LeftComponent
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_right',
        component: Page_C_RightComponent
      },
    ]
  },

  // Page D
  {
    path: 'page-d',
    children: [
      {
        path: ':param',
        pathMatch: 'full',
        outlet: 'router_left',
        component: Page_D_LeftComponent
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_right',
        component: Page_D_RightComponent
      },
    ]
  },

  // Page E
  {
    path: 'page-e',
    children: [
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_left',
        component: Page_E_LeftComponent,
        canActivate: [FreeGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'router_right',
        component: Page_E_RightComponent,
        canActivate: [LockerGuard]
      },
    ]
  },

  // Default Page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/page-a'
  },

  // Wildcard
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
