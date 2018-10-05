import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
 import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { CourseInsertComponent } from "../course-insert/course-insert.component";
import { FormsModule } from "@angular/forms";
// import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'courses', component : CoursesComponent},
            {path:'courses/:id', component : CourseDetailsComponent},
            // {path:'courses/edit/insert/', component : CourseInsertComponent} // NON FUNGE IL [routerLink] SE QUI IL path lo scrivo con questo / slash finale!!!!!
            {path:'courses/edit/insert', component : CourseInsertComponent}
        ])
    ],
    declarations: [
        CoursesComponent,
        CourseDetailsComponent,
        CourseInsertComponent
        // InstructorDetailsComponent
    ]
})
export class CoursesModule{

}