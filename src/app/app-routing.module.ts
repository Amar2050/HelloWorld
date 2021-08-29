import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsListComponent } from './cars-list/cars-list.component';
import { NewCarComponent } from './cars-list/new-car/new-car.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RequeteComponent } from './requete/requete.component';


const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "cars" , component: CarsListComponent },
  { path: "new-car" , component: NewCarComponent },
  { path: "drivers" , component: DriversListComponent },
  { path: "req" , component: RequeteComponent },
  { path: "not-found" , component: FourOhFourComponent },
  { path: "**" , redirectTo: "not-found"  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
