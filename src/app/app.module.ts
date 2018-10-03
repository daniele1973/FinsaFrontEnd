import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InstructorModule } from './instructors/instructor.module';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { StudentModule } from "./student/student.module";
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentDetailsComponent,
    // InstructorDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: '' , redirectTo: 'home',pathMatch: 'full'},
      {path:'**', redirectTo:'home',pathMatch:'full'},
    ]),
    InstructorModule,StudentModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
