import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentListComponent } from "./student-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'students', component : StudentListComponent},
            { path: 'students/:id', component: StudentDetailsComponent }
        ])
    ],
    declarations: [
        StudentListComponent,
        StudentDetailsComponent
    ]
})
export class StudentModule{

}