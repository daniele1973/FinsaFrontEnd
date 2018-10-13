import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentListComponent } from "./student-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { AddStudentComponent } from "../add-student/add-student.component";
import { FormsModule } from "@angular/forms";
import { StudentEnrollmentComponent } from "../student-enrollment/student-enrollment.component";
import { StudentDeleteComponent } from "../student-delete/student-delete.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'students', component : StudentListComponent},
            { path: 'students/:id', component: StudentDetailsComponent },
            { path: 'addstudent', component: AddStudentComponent },
            { path: 'studentenrollment/:id', component: StudentEnrollmentComponent },
            { path: 'studentdelete/:id', component: StudentDeleteComponent }
        ])
    ],
    declarations: [
        StudentListComponent,
        StudentDetailsComponent,
        AddStudentComponent
    ]
})
export class StudentModule{

}
