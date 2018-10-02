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
    instructorUrl : string = 'http://localhost:56871/api/Docente/';
    
    /*
    instructors : Instructor[] = [
        {
            IdDocente: 1,
            Nome: 'Luca',
            Cognome: 'De Sughi',
            DataNascita: new Date(),
            Eta: 25,
            TipoDocente:'esterno',
            CF: 'rccmei64uye987z'
        },
        {
            IdDocente: 2,
            Nome: 'Marzio',
            Cognome: 'Andrellis',
            DataNascita: new Date(),
            Eta: 45,
            TipoDocente:'interno',
            CF: 'mrzpeor8367bh'
        }

    ];
*/

    getAllInstructors() : Observable<Instructor[]>{
       // return this.instructors;
        return this.http.get<Instructor[]>(this.instructorUrl).pipe(
            tap(d => console.log(JSON.stringify(d)))
        );
        
    }
}