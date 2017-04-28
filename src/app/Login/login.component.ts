/**
 * Created by larsdolvik on 23/04/2017.
 */
/**
 * Created by larsdolvik on 07/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'Login';

  constructor(private _location: Location) {
  }

  ngOnInit() {
    console.log("Weight Workout");
  }

}
