import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherssubService {

  id: string = sessionStorage.getItem('reModelId')
  
  // sessionStorage.getItem('modelId');
 
  url: string = "https://navkiraninfotech.com/Customers/custom/klisee/api/get_sub_types?remodel_id=" + this.id;
  
  

  constructor(private http: HttpClient) {
    // console.log(this.url)
    // console.log(this.id)
    // console.log(sessionStorage.getItem('modelId'))
   }

  getOthersList():Observable<any>{
    return this.http.get(this.url)
  }
}
