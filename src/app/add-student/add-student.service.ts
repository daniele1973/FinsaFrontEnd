import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Student } from "../student/student";
import { StudentForm } from "./customerStudent";
import { NgForm } from "@angular/forms";


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class StudentAddService{

    student: StudentForm = new StudentForm();
    constructor(private http:HttpClient){

    }
    studentUrl : string = 'http://localhost:56871/api/Allievi';

    /*save(customerForm: NgForm) {
        const url = this.studentUrl; ///${customerForm.value}
        //console.log(customerForm.form);
        //console.log('Saved: ' + JSON.stringify(customerForm.value));
        
        
        let result = this.http.post<StudentForm>(url,this.student).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );

        result.subscribe(x=>console.log(x));
        return result;
      }*/

      /*getStudents(id: number) : Observable<Student>{
        // return this.instructors;
        const url = `${this.studentUrl}/${id}`;
         return this.http.get<Student>(url).pipe(
             tap(d => console.log(JSON.stringify(d)))
         );*/
}