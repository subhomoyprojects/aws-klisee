import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterTopsService {

  id: string= sessionStorage.getItem('counterId')

  constructor(private http: HttpClient) { }

  getCounterList():Observable<any>{
    console.log(this.id)
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/get_all_sub_subtypes?subtype_id=" +this.id)
  }
}

