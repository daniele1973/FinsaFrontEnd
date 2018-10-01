import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorsoComponent } from './corso/corso.component';
import { DocentiComponent } from './docenti/docenti.component';

@NgModule({
  declarations: [
    AppComponent,
    CorsoComponent,
    DocentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
