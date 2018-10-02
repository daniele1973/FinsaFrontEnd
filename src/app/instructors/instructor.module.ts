import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InstructorListComponent } from "./instructor-list.component";
import { CommonModule } from "@angular/common";
import { InstructorDetailsComponent } from "../instructor-details/instructor-details.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'instructors', component : InstructorListComponent},
            {path:'instructors/:id', component : InstructorDetailsComponent}
        ])
    ],
    declarations: [
        InstructorListComponent,
        InstructorDetailsComponent
    ]
})
export class InstructorModule{

}