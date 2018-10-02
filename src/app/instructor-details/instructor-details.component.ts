import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstructorListComponent } from '../instructors/instructor-list.component';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
   InstructorListComponent
   ,
   
   
    RouterModule.forChild([ // gli dai i file da aprire se mi dai questi percorsi nell'app.component.ts
      { path: 'instructors', component: InstructorListComponent },
      {
        path: 'products/:id',component: InstructorDetailsComponent  }
    ])
  ],
  declarations: [ //riassume tutte le componenti usate
    InstructorListComponent,
    InstructorDetailsComponent
  ]
})
export class ProductModule { }