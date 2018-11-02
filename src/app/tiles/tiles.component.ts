import { Component, OnInit } from '@angular/core';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  tiles ={};
  constructor(private tileService : TileService) { }

  ngOnInit() {
    this.getTiles();
  }

  getTiles(){
    //this.tileService.getTiles();
    this.tileService.getTiles().subscribe(
          tiles => {
            this.tiles = tiles
            console.log(this.tiles);
          }
    );
  }
}
