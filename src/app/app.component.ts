import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
        <my-component-test>
          <my-component-title>
            This is the Component title-test!
          </my-component-title>

          <my-component-content>
            And here's some awesome content-test.
          </my-component-content>

        </my-component-test>
      </div>


  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
