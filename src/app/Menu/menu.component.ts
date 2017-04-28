/**
 * Created by larsdolvik on 08/04/2017.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  title = 'Meny';

  //constructor(private _GitApiLoaderService: GitApiLoaderService) {
  //}

  ngOnInit() {
    console.log("Menu");
  }

  digg(){
    console.log("digg ass");
  }

}
