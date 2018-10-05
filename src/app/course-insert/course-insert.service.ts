import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class CourseInsertService{

    constructor(private httpCli :HttpClient){}

    courseInsertUrl : 'http://localhost:56871/api/Corsi/edit/insert';

}