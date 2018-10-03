import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstructorListComponent } from '../instructors/instructor-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../instructors/instructor.service';
import { Subscription } from 'rxjs';
import { Instructor } from '../instructors/instructor';


@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

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