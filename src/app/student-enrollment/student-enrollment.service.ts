import { Injectable } from "@angular/core";
import { ECourse } from "./EditionCourse";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class StudentEnrollmentService{

    constructor(private http:HttpClient){

    }
    edCourseUrl : string = 'http://localhost:56871/api/EdizioniCorsi/';

    getAllECourse() : Observable<ECourse[]>{
       // return this.instructors;
            return this.http.get<ECourse[]>(this.edCourseUrl)
            .pipe(
                tap(d => console.log(JSON.stringify(d))),
                catchError(this.handleError)
            ); 
    }

    handleError() {
        alert("Nessuna connessione!")
        // throw new Error("Method not implemented.");
        return throwError("Errore di sbaglio!");
    }
}