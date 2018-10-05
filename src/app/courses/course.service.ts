import { Injectable } from "@angular/core";
import { Course } from "./course";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CourseForInsert } from "../course-insert/courseForInsert";


@Injectable({ //inietta questo a chi ne fa richiesta
    providedIn: 'root'
  })
export class CourseService{ 

    constructor(private http:HttpClient){

    }
    courseUrl : string = 'http://localhost:56871/api/Corsi';

    getAllCourses() : Observable<Course[]>{
       // return this.instructors;
        return this.http.get<Course[]>(this.courseUrl)
            .pipe(
                tap(d => console.log(JSON.stringify(d))),
                catchError(this.handleError)
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

   createCourse(course: CourseForInsert) : Observable<CourseForInsert>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //vi ricordate Postman per fare una POST in json? L'effetto è modificare l'header che verrà inviato al server per dirgli che gli manderete un json
    // product.id = null; //credo che sia necessario per il mock db InMemory, che se il product ha un id va nei casini. Voi non dovreste farlo con un db vero... 
    
    // alert('asd');

   return  this.http.post<CourseForInsert>(this.courseUrl, course);


  }

  
  private  handleError(err){
    console.log("ERRORE: ");
    console.log(err);
    alert(err.name +"\n"+err.message);
    return throwError(err);
  }

}