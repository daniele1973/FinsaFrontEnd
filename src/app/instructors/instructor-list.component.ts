import { Component, OnInit } from "@angular/core";
import { InstructorService } from "./instructor.service";
import { Instructor } from "./instructor";
import { Observable } from "rxjs";

@Component ({
    templateUrl:'instructor-list.component.html',
    styleUrls: ['../courses/courses.component.css']
})
export class InstructorListComponent  implements OnInit{
    
    instructors : Instructor[] = [];
    errorMessage : string = "tutto OK";

    constructor(private instructorService: InstructorService){

    }

    ngOnInit(): void {
       let  observableResult : Observable<Instructor[]>
        =  this.instructorService.getAllInstructors();

        observableResult.subscribe(
            instr => this.instructors = instr,
            err => this.errorMessage = <any>err
        );
    }


   
        

}