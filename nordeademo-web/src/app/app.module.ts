import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoScreenComponentComponent } from './demo-screen-component/demo-screen-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoScreenComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
