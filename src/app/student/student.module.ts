import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentListComponent } from "./student-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { AddStudentComponent } from "../add-student/add-student.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'students', component : StudentListComponent},
            { path: 'students/:id', component: StudentDetailsComponent },
            { path: 'addstudent', component: AddStudentComponent }
        ])
    ],
    declarations: [
        StudentListComponent,
        StudentDetailsComponent
    ]
})
export class StudentModule{

}