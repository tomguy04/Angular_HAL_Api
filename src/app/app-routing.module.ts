import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TilesComponent } from './tiles/tiles.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

const routes: Routes = [
  { path: '', component: TilesComponent },
  { path: 'itinerary/:id', component: ItineraryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
