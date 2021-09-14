import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsUiAngularModule } from 'teams-ui-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeamsUiAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
