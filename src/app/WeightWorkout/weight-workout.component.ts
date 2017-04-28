/**
 * Created by larsdolvik on 07/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'weight-workout',
  templateUrl: './weight-workout.component.html',
  styleUrls: ['./weight-workout.component.css']
})
export class WeightWorkoutComponent implements OnInit{
  title = 'Styrketrening';

  constructor(private _location: Location) {
  }

  ngOnInit() {
    console.log("Weight Workout");
  }
  backClicked() {
    this._location.back();
  }
}
