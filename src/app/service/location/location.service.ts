import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocation(place): Observable<any>{
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/fetch_market_details?zipcode='+place)
  }
}
