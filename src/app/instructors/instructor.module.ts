import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InstructorListComponent } from "./instructor-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";
import { InstructorInsertComponent } from "../instructor-insert/instructor-insert.component";
import { FormsModule } from "@angular/forms";
import { InstructorEnrollmentComponent } from "../instructor-enrollment/instructor-enrollment.component";



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'instructors', component : InstructorListComponent},
            {path:'instructors/:id', component : InstructorDetailsComponent},
            {path:'addinstructor', component : InstructorInsertComponent},
            {path:'iscriviCorso/:id', component : InstructorEnrollmentComponent}
        ])
    ],
    declarations: [
        InstructorListComponent,
        InstructorDetailsComponent,
        InstructorInsertComponent,
        InstructorEnrollmentComponent
        
    ]
})
export class InstructorModule{

}