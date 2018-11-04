import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TileService } from '../tile.service';
import { Itinerary } from '../models/itinerary';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  itinerary : Itinerary;

  constructor( private location: Location,  private route: ActivatedRoute, private tileService: TileService) { }

  ngOnInit() {
    this.getItinerary();
  }

  goBack(): void {
    this.location.back();
  }

  getItinerary(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.tileService.getItinerary(id.toString())
      .subscribe(itinerary => this.itinerary = itinerary);
  }

}
