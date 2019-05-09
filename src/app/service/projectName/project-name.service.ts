import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectNameService {

  constructor(private http: HttpClient) { }

  getProjectName(data):Observable<any>{

    let userId = sessionStorage.getItem('userId')
    let projectName = sessionStorage.getItem('projectName')
    var body= "user_id="+ userId
            +"&project_name="+ projectName
            +"&project_id="+ data;

    console.log(body)     
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/user_project_name_inserted?`+ body, '')
    // return 1;
  }
}
