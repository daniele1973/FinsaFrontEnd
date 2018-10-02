import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InstructorListComponent } from "./instructor-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'instructors', component : InstructorListComponent}
        ])
    ],
    declarations: [
        InstructorListComponent
    ]
})
export class InstructorModule{

}