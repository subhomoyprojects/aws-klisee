import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterBudgetService {
  // lengthDetails= sessionStorage.getItem('listDetails')
  // needIsland= sessionStorage.getItem('needIslandPeninsula')
  // islandDetails= sessionStorage.getItem('peninsulaDetails')
  // splashNeed= sessionStorage.getItem('addSplash')
  // sinkNeed= sessionStorage.getItem('needSink')
  // plumberNeed= sessionStorage.getItem('needPlumber')
  // counterRemoved= sessionStorage.getItem('counterRemoved')
  
  // totalSink= sessionStorage.getItem('howManySink')
  


  constructor(private http: HttpClient) { }

  getCounterBudget():Observable<any>{

    let location= sessionStorage.getItem('place')
    let ModelId= sessionStorage.getItem('ModelId')
    let subId= sessionStorage.getItem('counterId')
    let projectId
    if(sessionStorage.getItem('projectId')!=''){
      projectId = sessionStorage.getItem('projectId')
    }
    else{
      projectId = " "
    }
    
    
    let counterId= sessionStorage.getItem('counterTopId')
    // console.log(sessionStorage.getItem('counterTopId'))
    // console.log(sessionStorage.getItem('listDetails'))
    let materialName= sessionStorage.getItem('counterTopName')
    let userId=sessionStorage.getItem('userId')
    // let modelNumber = sessionStorage.getItem('modelName')
    let sku = sessionStorage.getItem('sku')
    let description = sessionStorage.getItem('description')
    // console.log(sessionStorage.getItem('userId'))
    // console.log(sessionStorage.getItem('budget'))
    let checkCounterTopsId=sessionStorage.getItem('checkCounterTopsId')
    if(checkCounterTopsId!=''){
      counterId=sessionStorage.getItem('checkCounterTopsId');
    }
    let budget=  sessionStorage.getItem('budget')
    var body= "countertop_details="+ sessionStorage.getItem('listDetails')
              +"&island_need="+ sessionStorage.getItem('needIslandPeninsula')
              +"&island_details="+ sessionStorage.getItem('peninsulaDetails')
              +"&backsplash_need="+ sessionStorage.getItem('addSplash')
              +"&sink_need="+ sessionStorage.getItem('needSink')
              +"&plumber_reconnect_need="+ sessionStorage.getItem('needPlumber')
              +"&sink_budget="+ budget
              +"&old_counter_removed_need="+ sessionStorage.getItem('counterRemoved')
              +"&zip_code="+ location
              +"&remodel_type_id="+ ModelId
              +"&remodel_sub_type_id="+ subId
              +"&remodel_sub_sub_type_id="+ counterId
              +"&user_id="+ userId
              +"&total_sink="+ sessionStorage.getItem('howManySink')
              +"&material_name="+ materialName
              +"&project_id="+ projectId
              // +"&model_name="+ modelNumber
              +"&sku="+ sku
              +"&description="+ description
    console.log(body)
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/budget_calculation_for_countertops?`+ body, '')
  }

  getCounterAssumption():Observable<any>{
    let location= sessionStorage.getItem('place')
    let ModelId= sessionStorage.getItem('ModelId')
    let subId= sessionStorage.getItem('counterId')
    let counterId= sessionStorage.getItem('counterTopId')
    let materialName= sessionStorage.getItem('counterTopName')
    var body= "countertop_details="+ sessionStorage.getItem('listDetails')
              +"&island_need="+ sessionStorage.getItem('needIslandPeninsula')
              +"&island_details="+ sessionStorage.getItem('peninsulaDetails')
              +"&backsplash_need="+ sessionStorage.getItem('addSplash')
              +"&zip_code="+ location
              +"&remodel_type_id="+ ModelId
              +"&remodel_sub_type_id="+ subId
              +"&remodel_sub_sub_type_id="+ counterId
              +"&user_id="+ ""
              +"&material_name="+ materialName
              +"&total_sink="+ sessionStorage.getItem('howManySink')
    console.log(body)
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/budget_assumptions_for_countertops?'+ body)
  }
}
