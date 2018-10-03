import { Component, OnInit } from "@angular/core";
import { StudentService } from "./student.service";
import { Student } from "./student";
import { Observable } from "rxjs";

@Component ({
    selector: 'router-outlet',
    templateUrl:'./student.component.html'

})
export class StudentListComponent implements OnInit{
    students : Student[] = [];
    errorMessage : string = "tutto OK";
    constructor(private studentService: StudentService){

    }

    ngOnInit(): void {
       let  observableResult : Observable<Student[]>
        =  this.studentService.getAllInstructors();

        observableResult.subscribe(
            instr => this.students = instr,
            err => this.errorMessage = <any>err
        );
    }
}