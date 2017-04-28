import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeightWorkoutComponent } from './WeightWorkout/weight-workout.component';
import { CardioWorkoutComponent } from './CardioWorkout/cardio-workout.component';
import { MenuComponent } from './Menu/menu.component';
import { LoginComponent } from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightWorkoutComponent,
    CardioWorkoutComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'menu', component: MenuComponent},
      {path: 'weightworkout', component: WeightWorkoutComponent},
      {path: 'cardioworkout', component: CardioWorkoutComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
