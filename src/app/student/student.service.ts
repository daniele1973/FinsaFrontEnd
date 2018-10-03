import { Injectable } from "@angular/core";
import { Student } from "./student";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class StudentService{

    constructor(private http:HttpClient){

    }
    studentUrl : string = 'http://localhost:56871/api/Allievi/';

    getAllStudents() : Observable<Student[]>{
       // return this.instructors;
        return this.http.get<Student[]>(this.studentUrl).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
        
    }
}