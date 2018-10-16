import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InstructorListComponent } from "./instructor-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";
import { InstructorInsertComponent } from "../instructor-insert/instructor-insert.component";
import { FormsModule } from "@angular/forms";
import { InstructorEnrollmentComponent } from "../instructor-enrollment/instructor-enrollment.component";
import { InstructorDeleteComponent } from "../instructor-delete/instructor-delete.component";



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'instructors', component : InstructorListComponent},
            {path:'instructors/:id', component : InstructorDetailsComponent},
            {path:'addinstructor', component : InstructorInsertComponent},
            {path:'instructorenrollment/:id', component : InstructorEnrollmentComponent},
            {path:'instructorDelete/:id', component : InstructorDeleteComponent}
        ])
    ],
    declarations: [
        InstructorListComponent,
        InstructorDetailsComponent,
        InstructorInsertComponent,
        InstructorDeleteComponent,
        InstructorEnrollmentComponent
        
    ]
})
export class InstructorModule{

}