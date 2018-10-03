import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentListComponent } from "./student-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'students', component : StudentListComponent},
            { path: 'students/:id', component: StudentListComponent }
        ])
    ],
    declarations: [
        StudentListComponent,
    ]
})
export class StudentModule{

}