import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialCostService {
  
  constructor(private http: HttpClient) { }

  getMaterialCost(idd):Observable<any>{
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/fetch_material_cost_as_per_category_id?floor_type_id=" +idd)
  }

  getDefaultCountertopsCost():Observable<any>{
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/default_budget_cost_of_countertops")
  }
}
