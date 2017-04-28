import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';
import { WeightWorkoutComponent } from './WeightWorkout/weight-workout.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private router:Router

  ) {}

  ngOnInit(){
    this.router.navigate(['/menu']);
  }
   click(){
    this.ngOnInit();
  }
}
