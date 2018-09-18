import { Component, OnInit } from '@angular/core';
import { Context } from '@speak/ng-sc/context';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-context-page',
  templateUrl: './context-page.component.html',
  styleUrls: ['./context-page.component.scss']
})
export class ContextPageComponent implements OnInit {
  ctx: Context = {} as Context;

  constructor(public context$: Observable<Context>) { 
  }

  ngOnInit() {
    this.context$.subscribe(context => this.ctx = context);
  }
}
