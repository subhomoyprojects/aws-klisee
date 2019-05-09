import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalculationService {

  
  // casepack= sessionStorage.getItem('casePack')
  
  // priceSqrft= sessionStorage.getItem('priceSquare')
  // place= sessionStorage.getItem('place')
  
  // manufacture= sessionStorage.getItem('manufacturer')
  constructor(private http: HttpClient) { 

  }

  getBudget(): Observable<any>{
    let modelId= sessionStorage.getItem('ModelId')
    let others= sessionStorage.getItem('flooringId')
    console.log(sessionStorage.getItem('floorId'))
    let flooring= sessionStorage.getItem('floorId')
    let place =sessionStorage.getItem('place');
    let rooms = sessionStorage.getItem('roomDetails');
    let casePack=sessionStorage.getItem('casePack');
    let priceSquare=sessionStorage.getItem('priceSquare');
    let manufacturer=sessionStorage.getItem('manufacturer');
    let sku=sessionStorage.getItem('sku')
    let userId=sessionStorage.getItem('userId')
    let projectId
    if(sessionStorage.getItem('projectId')!=''){
      projectId = sessionStorage.getItem('projectId')
    }
    else{
      projectId = " "
    }
    let checkFlorringId=sessionStorage.getItem('checkFlorringId');
    if(checkFlorringId!=''){
      flooring=sessionStorage.getItem('checkFlorringId');
    }
    //console.log(sessionStorage.getItem('casePack'));
    var body = "all_data_collection="+ rooms
              +"&case_pack_size="+ casePack 
              + "&price_per_sf="+ priceSquare
              + "&zip_code="+ place
              + "&remodel_type_id="+ modelId
              + "&remodel_sub_type_id="+ others
              + "&remodel_sub_sub_type_id="+ flooring
              + "&user_id="+ userId
              + "&material_name="+ manufacturer
              + "&sku="+ sku
              + "&project_id="+ projectId;
    console.log(body)
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/budget_calculation_for_flooring?`+ body, "")
  }

  getAssumption():Observable<any>{
    let flooring= sessionStorage.getItem('floorId')
    let place =sessionStorage.getItem('place');
    let rooms = sessionStorage.getItem('roomDetails')
    let casePack=sessionStorage.getItem('casePack');
    let priceSquare=sessionStorage.getItem('priceSquare');
    var body = "all_data_collection="+ rooms
              +"&case_pack_size="+ casePack
              + "&price_per_sf="+ priceSquare
              + "&zip_code="+ place
              + "&remodel_sub_sub_type_id="+ flooring;
    console.log(body)
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/budget_assumptions_for_flooring?'+ body)
  }
}
