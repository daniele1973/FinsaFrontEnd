import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs";
import { CourseEdition } from "./course-edition";
import { tap } from "rxjs/operators";
import { CourseEditionsComponent } from "./course-editions.component";


@Injectable({
    providedIn: 'root'
})
export class CourseService{
    constructor(private http:HttpClient){}

    courseEditionsUrl :string = 'http://localhost:56871/api/EdizioniCorsi'

    getAllCourseEditions() :Observable<CourseEdition[]>{
        return this.http.get<CourseEdition[]>(this.courseEditionsUrl).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
    }

    getEditionsOfCourse(courseId :number) :Observable<CourseEdition>{

        const url = `${this.courseEditionsUrl}/course/${courseId}`;

        return this.http.get<CourseEdition>(url)
            .pipe(
                tap( data => console.log('getEditionOfCourse: ' + JSON.stringify(data)))
            )
    }
}