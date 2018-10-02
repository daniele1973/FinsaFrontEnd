import { Component } from "@angular/core";

@Component ({
    templateUrl:'instructor-list.component.html'

})
export class InstructorListComponent {


    instructors = [
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

}