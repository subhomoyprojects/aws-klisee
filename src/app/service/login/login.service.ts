import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getuserId(data):Observable<any>{
    var body = "email=" + data.email + "&password=" + data.password;
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/login?`+ body, "")
  }
}
