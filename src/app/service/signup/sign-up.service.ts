import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  

  constructor(private http: HttpClient) { }

  getUserId(data):Observable<any>{
    // console.log(data)
    var body = "name=" + data.name + "&email=" + data.email + "&password=" + data.password;
    // console.log(body)
    // var data1  = {"first_name":"anup","email":"g@YJUYUYUYS","password":"dfsqq"}
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/signup?`+ body,"")
  }
}
