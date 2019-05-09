import { Component, OnInit } from '@angular/core';
import { OtherssubService } from 'src/app/service/otherssub/otherssub.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  service_name: Array<any> = [];
  data: any;
  service_id: Array<any> = [];
  linkArr: Array<any> = ["/flooring","","",""];
  constructor(public othersservice: OtherssubService ) { }

  ngOnInit() {
    sessionStorage.setItem('roomDetails', '')
    sessionStorage.setItem('listDetails', '')
    this.othersservice.getOthersList().subscribe(res=>{
      // console.log(res)
      for(let i: number = 0; i<res.data.length; i++){
        this.service_name.push(res.data[i].subtype_name);
        // console.log(this.servicename)
        this.service_id.push(res.data[i].id)
        // console.log(this.service_id)
      }
      // console.log(this.service_id)
      // console.log('modelId')
      // console.log(this.servicename)
    }
    )

    sessionStorage.setItem('reModelId', '')
  }

  routingPath(id){
    //  if(){
      // console.log(id);
      if(this.service_id[id] == '1'){
        sessionStorage.setItem('flooring', this.service_name[id])
        sessionStorage.setItem('flooringId', this.service_id[id])
        // console.log(this.service_name[id])
        return true;
      }
      if(this.service_id[id] == '3'){
        // sessionStorage.setItem('flooring', this.service_name[id])
        sessionStorage.setItem('counterId', this.service_id[id])
        // console.log(this.service_name[id])
        return true;
      }
     }
  // Path(id){
  //   if(this.service_id[id] == '3'){
  //     // sessionStorage.setItem('flooring', this.service_name[id])
  //     sessionStorage.setItem('counterId', this.service_id[id])
  //     // console.log(this.service_name[id])
  //     return true;
  //   }
  // }

}
