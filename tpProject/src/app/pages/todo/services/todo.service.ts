import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _items = new BehaviorSubject<string[]>([]);

  get items()
  {
    return this._items;
  }

  set item(item: string)
  {
    this._items.next([...this._items.value, item]);
  }
}
