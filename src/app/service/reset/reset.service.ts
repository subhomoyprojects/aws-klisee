import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }

  getPassword(password): Observable<any>{
    let authenticationCode= sessionStorage.getItem('authenticationCode')
    let userCode= sessionStorage.getItem('userCode') 
    var body= "user_id=" + userCode + "&new_password=" + password + "&authentication_code=" + authenticationCode
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/password_setting?`+ body, '')
  }
}
