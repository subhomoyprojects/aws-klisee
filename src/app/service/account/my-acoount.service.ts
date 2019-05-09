import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyAcoountService {

  constructor(private http: HttpClient) { }

  getMyAccount():Observable<any>{
    let userId=sessionStorage.getItem('userId')
    let body= "user_id="+ userId
              +"&search_key="+ " "
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/my_projects?'+body)
  }

  getFlooringDetails():Observable<any>{
    let userId = sessionStorage.getItem('userId')
    let projectId = sessionStorage.getItem('projectId')
    let body= "user_id="+ userId
              +"&project_id="+ projectId
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/project_details_of_flooring_type?'+body)
  }

  getCounterTopsDetails():Observable<any>{
    let userId = sessionStorage.getItem('userId')
    let projectId = sessionStorage.getItem('projectId')
    let body= "user_id="+ userId
              +"&project_id="+ projectId
    return this.http.get('https://navkiraninfotech.com/Customers/custom/klisee/api/project_details_of_countertops_type?'+ body)
  }
}
