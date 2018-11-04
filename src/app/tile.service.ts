import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Jsonp } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Itinerary } from './models/itinerary';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  hostname: 'qa.hollandamerica.com',
  port: 443, //80 for http
  path: '/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0', 
  method: 'GET'
};

// const urlProxy = 'https://cors-anywhere.herokuapp.com/https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0&callback=JSONP_CALLBACK';
const urlProxy = 'https://cors-anywhere.herokuapp.com/https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0';

@Injectable({
  providedIn: 'root'
})

export class TileService {
  private tileURL = urlProxy;
  constructor(private jsonp: Jsonp, private http : HttpClient) { }
  itineraries : Itinerary[] = [];
  itineraryData = [];
  stateRooms = [];

  /** GET tiles from the server */
  // getTiles ():Observable<any> {
    getTiles ():Observable<Itinerary[]> {
    return this.http.get<any>(this.tileURL)
    .pipe(
      map((val:any)=>{
        console.log(val.data[0])
        this.itineraryData = val.data[0].attributes.itineraries;

        for (let i = 0; i < this.itineraryData.length; i++){
          this.stateRooms = JSON.parse(JSON.stringify( this.itineraryData[i].voyages[0].stateRooms));
          console.log(this.stateRooms);
          const itineraryObj = new Itinerary(
            this.itineraryData[i].voyages[0].itinerary.description,
            this.itineraryData[i].voyages[0].dateDepart,
            this.itineraryData[i].voyages[0].ship.displayName,
            this.itineraryData[i].voyages[0].disembarkPort.portName,
            this.itineraryData[i].voyages[0].embarkPort.portName,
            this.itineraryData[i].voyages[0].stateRooms = JSON.parse(JSON.stringify( this.itineraryData[i].voyages[0].stateRooms)),
            this.itineraryData[i].voyages[0].TFPE.price,
            this.itineraryData[i].voyages[0].stateRooms[0]._id,
            this.itineraryData[i].voyages[0].stateRooms[0].priceBlocks[0].prices[0].fare
          );
          this.itineraries.push(itineraryObj);
        }
        return (this.itineraries);
      }
    ));
    
  }
}
