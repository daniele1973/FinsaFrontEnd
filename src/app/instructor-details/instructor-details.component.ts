import { Component, OnInit, NgModule, OnDestroy, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstructorListComponent } from '../instructors/instructor-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../instructors/instructor.service';
import { Subscription } from 'rxjs';
import { Instructor } from '../instructors/instructor';


@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['../course-details/course-details.component.css']
})
export class InstructorDetailsComponent implements OnInit, OnDestroy {
private errorMessage='';

  private sub: Subscription;
  instructor : Instructor | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: InstructorService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getInstructor(id);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInstructor(id: number) {
    console.log(`Chiamata getInstructor(${id})`);

    this.productService.getInstructor(id).subscribe(
      instructor => {this.instructor = instructor;
                     console.log(`Successo! instructor.idDocente=${instructor.idDocente}`); },
      error => {this.errorMessage = <any>error;
                alert(`FALLIMENTO: error=${error}`);}
    );
  }
}

@NgModule({
  imports: [
   InstructorListComponent
   ,
   
   
    RouterModule.forChild([ // gli dai i file da aprire se mi dai questi percorsi nell'app.component.ts
      { path: 'instructors', component: InstructorListComponent },
      { path: 'instructors/:id',component: InstructorDetailsComponent  }
    ])
  ],
  declarations: [ //riassume tutte le componenti usate
    InstructorListComponent,
    InstructorDetailsComponent
  ]
})
export class InstructorModule { }

// import { Component, OnInit, NgModule, OnDestroy, Output } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { InstructorListComponent } from '../instructors/instructor-list.component';
// import { ActivatedRoute, Router } from '@angular/router';
// import { InstructorService } from '../instructors/instructor.service';
// import { Subscription } from 'rxjs';
// import { Instructor } from '../instructors/instructor';
// import { tap, catchError } from 'rxjs/operators';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Corso } from '../student-details/Corsi';


// @Component({
//   selector: 'app-instructor-details',
//   templateUrl: './instructor-details.component.html',
//   styleUrls: ['../course-details/course-details.component.css']
// })
// export class InstructorDetailsComponent implements OnInit, OnDestroy {
// private errorMessage='';

//   private sub: Subscription;
//   listCourse: Corso[] = [];
//   id : number;
//   instructor : Instructor | undefined;
//   instructorFCUrl : string;
//   constructor(private route: ActivatedRoute,
//     private router: Router,
//     private productService: InstructorService,private http: HttpClient, private InstructorService) {
//   }

//   ngOnInit() {
//     this.sub = this.route.params.subscribe(
//       params => {
//         this.id = +params['id'];
//         this.instructorFCUrl = `http://localhost:56871/api/Docenti/${this.id}/corsi`;
//         this.InstructorService.getInstructor(this.id).subscribe(
//           instr => this.instructor = instr,
//             err => this.errorMessage = <any>err
//         );
//       });
//   }

//   // DammiICorsi()
//   // {
//   //   this.http.get<Corso[]>(this.instructorFCUrl)
//   //         .pipe(
//   //             tap(d => console.log(JSON.stringify(d)))
//   //         ).subscribe(
//   //           instr => this.listCourse = instr,
//   //           err => this.errorMessage = <any>err
//   //       );
//   // }

//   ngOnDestroy(): void {
//     this.sub.unsubscribe();
//   }

//   getInstructor(id: number) {
//     console.log(`Chiamata getInstructor(${id})`);

//     this.productService.getInstructor(id).subscribe(
//       instructor => {this.instructor = instructor;
//                      console.log(`Successo! instructor.idDocente=${instructor.idDocente}`); },
//       error => {this.errorMessage = <any>error;
//                 alert(`FALLIMENTO: error=${error}`);}
//     );
//   }
// }

// @NgModule({
//   imports: [
//    InstructorListComponent
//    ,
   
   
//     RouterModule.forChild([ // gli dai i file da aprire se mi dai questi percorsi nell'app.component.ts
//       { path: 'instructors', component: InstructorListComponent },
//       { path: 'instructors/:id',component: InstructorDetailsComponent  }
//     ])
//   ],
//   declarations: [ //riassume tutte le componenti usate
//     InstructorListComponent,
//     InstructorDetailsComponent
//   ]
// })
// export class InstructorModule { }
