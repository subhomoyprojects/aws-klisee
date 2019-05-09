import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlooringService {
  
  id: string= sessionStorage.getItem('flooringId')

  constructor(private http: HttpClient) { }

  getFlooringList():Observable<any>{
    console.log(this.id)
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/get_all_sub_subtypes?subtype_id=" +this.id)
  }
}
