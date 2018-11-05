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
  selectedStateRoomName : String = '';
  selectedStateRoomPrice : Number = 0;
  stateRooms = [];




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
      .subscribe(itinerary => {
        this.itinerary = itinerary
        console.log(`current initerary ${JSON.parse(JSON.stringify(this.itinerary))}`);
        // this.stateRooms = JSON.parse(JSON.stringify(this.itinerary.voyages[0].stateRooms));
      }
      
    );
    
  }

  onSelect(room,voyage){
    console.log(room);
    voyage.selectedStateRoomPrice = room.priceBlocks[0].prices[0].fare;
    voyage.selectedStateRoomName = room._id;
  }



  

}
