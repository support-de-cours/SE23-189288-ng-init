import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MaybeService } from 'src/app/services/maybe.service';

@Injectable({
  providedIn: 'root'
})
export class MaybeYesMaybeNoGuard implements CanActivate {

  constructor(
    private _service: MaybeService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let theMaybeServiceSay = this._service.iSay();

      if (theMaybeServiceSay)
      {
        console.log('the Maybe Service Say YES');
      }
      else
      {
        console.log('the Maybe Service Say NO');
      }
      
      return theMaybeServiceSay;

  }
  
}
