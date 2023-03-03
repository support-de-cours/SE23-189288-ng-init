import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaybeService {

  constructor() { }

  iSay(): boolean
  {
    return (Math.random() < 0.4);
  }
}
