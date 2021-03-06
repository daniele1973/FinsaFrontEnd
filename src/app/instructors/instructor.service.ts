import { Injectable } from "@angular/core";
import { Instructor } from "./instructor";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class InstructorService{

    constructor(private http:HttpClient){

    }
    instructorUrl : string = 'http://localhost:56871/api/Docenti';
    


    getAllInstructors() : Observable<Instructor[]>{
       
        return this.http.get<Instructor[]>(this.instructorUrl).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
        
   }

   getInstructor(id :number) :Observable<Instructor>{
    
    console.log(`chiamata getInstructor(${id})`);

      const url = `${this.instructorUrl}/${id}`;
      return this.http.get<Instructor>(url)
        .pipe(
          tap(data => console.log('getInstructor: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
   }

   private  handleError(err){
       console.log("ERRORE: " + err);
       return throwError(err);
   }
}