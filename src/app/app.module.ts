import { BrowserModule } from '@angular/platform-browser';

import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas:      [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
