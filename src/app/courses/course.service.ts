import { Injectable } from "@angular/core";
import { Course } from "./course";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class CourseService{ 

    constructor(private http:HttpClient){

    }
    courseUrl : string = 'http://localhost:56871/api/Corsi';

    getAllCourses() : Observable<Course[]>{
       // return this.instructors;
        return this.http.get<Course[]>(this.courseUrl).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
        
   }

   getCourse(id :number) :Observable<Course>{
    
      const url = `${this.courseUrl}/${id}`;
      return this.http.get<Course>(url)
        .pipe(
          tap(data => console.log('getCOURSE: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
   }

   private  handleError(err){
       console.log("ERRORE: " + err);
       return throwError(err);
   }
}