import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  paramValue: string|null = null;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramValue = this._route.snapshot.paramMap.get('param');
  }

}
