import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandardMaterialCostService {

  constructor(private http: HttpClient) { }

  getStandardMaterialCost():Observable<any>{
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/get_all_standard_cost")
  }
}
