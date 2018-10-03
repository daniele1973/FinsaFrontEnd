import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
 import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
// import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'courses', component : CoursesComponent},
            // {path:'instructors/:id', component : InstructorDetailsComponent}
        ])
    ],
    declarations: [
        CoursesComponent,
        // InstructorDetailsComponent
    ]
})
export class CoursesModule{

}