/**
 * Created by larsdolvik on 08/04/2017.
 */
/**
 * Created by larsdolvik on 07/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'cardio-workout',
  templateUrl: './cardio-workout.component.html',
  styleUrls: ['./cardio-workout.component.css']
})
export class CardioWorkoutComponent implements OnInit{
  title = 'Kardiotrening';

  constructor(private _location: Location) {
  }

  ngOnInit() {
    console.log("Cardio Workout");
  }

  backClicked() {
    this._location.back();
  }

}
