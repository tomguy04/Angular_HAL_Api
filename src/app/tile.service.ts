import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Jsonp } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

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
  obj = {}
  itineraries = [];
  myItineraries = [];

  /** GET tiles from the server */
  getTiles ():Observable<any> {
    return this.http.get<any>(this.tileURL)
    .pipe(
      map((val:any)=>{
        console.log(val.data[0].attributes.itineraries)
        this.itineraries = val.data[0].attributes.itineraries;

        for (let i = 0; i < this.itineraries.length; i++){
          console.log(this.itineraries[i].voyages[0])
          // this.myItineraries.push()
          console.log(this.itineraries[i].voyages[0].itinerary.description)
          console.log(this.itineraries[i].voyages[0].dateDepart)
          console.log(this.itineraries[i].voyages[0].ship.displayName)
          console.log(this.itineraries[i].voyages[0].disembarkPort.portName)
          console.log(this.itineraries[i].voyages[0].embarkPort.portName)
          console.log(this.itineraries[i].voyages[0].ship.displayName)
          console.log(this.itineraries[i].voyages[0].lowestVoyagePrice)
        }
      }
    ));
    
  }
}
