import { Injectable } from "@angular/core";
import { StudentDetailsComponent } from "./student-details.component";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Student } from "../student/student";


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class StudentDetailsService{

    constructor(private http:HttpClient){

    }
    studentUrl : string = 'http://localhost:56871/api/Allievi';

    getStudents(id: number) : Observable<Student>{
       // return this.instructors;
       const url = `${this.studentUrl}/${id}`;
        return this.http.get<Student>(url).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
        
    }
}