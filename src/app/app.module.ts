import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InstructorModule } from './instructors/instructor.module';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
// import { CourseListComponent } from './course-list/course-list.component'; NON ESISTE PIU
import { CoursesComponent } from './courses/courses.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // CourseListComponent, NON ESISTE PIU
    // InstructorDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: '' , redirectTo: 'home',pathMatch: 'full'},
      {path:'**', redirectTo:'home',pathMatch:'full'}
    ]),
    InstructorModule, CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
