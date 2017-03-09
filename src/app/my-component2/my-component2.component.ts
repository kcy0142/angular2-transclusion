import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component-test2',
  template: `
  <div class="my-component">
        <div>
          Title2:
          <ng-content select="my-component-title2"></ng-content>
        </div>
        <div>
          Content2:
          <ng-content select="my-component-content2"></ng-content>
        </div>
      </div>


  `,
  //templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
