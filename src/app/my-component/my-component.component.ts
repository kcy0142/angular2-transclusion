import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component-test',
  template: `
  <div class="my-component">
        <div>
          Title:
          <ng-content select="my-component-title"></ng-content>
        </div>
        <div>
          Content:
          <ng-content select="my-component-content"></ng-content>
        </div>
      </div>

<h2>test</h2>
<div class="app2">
      <my-component-test2>
        <my-component-title2>
          This is the Component title-test!
        </my-component-title2>

        <my-component-content2>
          And here's some awesome content-test.
        </my-component-content2>

      </my-component-test2>
    </div>

  `,
  //  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
