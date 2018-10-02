import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InstructorModule } from './instructors/instructor.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: '' , redirectTo: 'home',pathMatch: 'full'},
      {path:'**', redirectTo:'home',pathMatch:'full'}
    ]),
    InstructorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
