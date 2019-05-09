import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor( private http: HttpClient ) { }

  getEmail(email):Observable<any>{
    var body = "email=" + email
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/forgot_password?`+ body, '' )
  }
}
