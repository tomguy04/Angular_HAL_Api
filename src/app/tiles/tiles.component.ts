import { Component, OnInit } from '@angular/core';
import { TileService } from '../tile.service';
import { Itinerary } from '../models/itinerary';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  tiles : Itinerary[]=[];
  selectedStateRoomName : String = '';
  selectedStateRoomPrice : Number = 0;


  constructor(private tileService : TileService) { }

  ngOnInit() {
    this.getTiles();
   
  }

  getTiles(){
    //this.tileService.getTiles();
    this.tileService.getTiles().subscribe(
          tiles => {
            this.tiles = tiles
            // console.log(`***************${this.tiles}`);
          }
    );
  }

  onSelect(room,voyage){
    console.log(room);
    voyage.selectedStateRoomPrice = room.priceBlocks[0].prices[0].fare;
    voyage.selectedStateRoomName = room._id;
  }


  
}
