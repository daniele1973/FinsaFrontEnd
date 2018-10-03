import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
 import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
import { CourseDetailsComponent } from "../course-details/course-details.component";
// import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'courses', component : CoursesComponent},
            {path:'courses/:id', component : CourseDetailsComponent}
        ])
    ],
    declarations: [
        CoursesComponent,
        CourseDetailsComponent
        // InstructorDetailsComponent
    ]
})
export class CoursesModule{

}