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
import { StudentModule } from "./student/student.module";
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseEditionsComponent } from './course-editions/course-editions.component';
import { CourseInsertComponent } from './course-insert/course-insert.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CourseEditionsComponent,
    StudentEnrollmentComponent,
    // CourseInsertComponent, //questo ce lo mette automaticamente "ng gc course-details", ma non va messo in questo modulo bensì nel courses.module.ts
    // CourseListComponent, NON ESISTE PIU
    // StudentDetailsComponent,
    // CourseDetailsComponent //, questo ce lo mette automaticamente "ng gc course-details", ma non va messo in questo modulo bensì nel courses.module.ts
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
    CoursesModule,
    InstructorModule,StudentModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
