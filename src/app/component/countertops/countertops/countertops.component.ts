import { Component, OnInit } from '@angular/core';
import { CounterTopsService } from 'src/app/service/counter-tops/counter-tops.service';
import { ICounter } from 'src/app/countertype';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countertops',
  templateUrl: './countertops.component.html',
  styleUrls: ['./countertops.component.css']
})
export class CountertopsComponent implements OnInit {
  counterArr: Array<ICounter>= [];
  bothData: Array<string>=[];
  counterID: any;

  constructor(public countertopservice: CounterTopsService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    if(sessionStorage.getItem('projectId')!=''){
      this.route.queryParamMap.subscribe(queryParams => {
      this.counterID  = queryParams.get("id")
      if(this.counterID > 0){
        sessionStorage.setItem('checkCounterTopsId', this.counterID) // for checking in service page
      }
      // sessionStorage.setItem('checkCounterTopsId', this.counterID)
    })
  }
  else{
    this.counterID= sessionStorage.getItem('counterTopId')
  }

    this.countertopservice.getCounterList().subscribe(res=>{
      // console.log(res)
      let i: number;
      let isChecked:boolean;
      for(i=0; i<res.data.length; i++){

        let counter: ICounter;
        counter = {id: res.data[i].id, type_name: res.data[i].type_name}
        this.counterArr.push(counter);
      }
      console.log(this.counterArr)
      for(i=0; i<this.counterArr.length; i++){
        let both: string;
        isChecked=false;
        if(sessionStorage.getItem('checkCounterTopsId')==res.data[i].id){
          isChecked=true;
        }
        both = res.data[i].id+'|'+ res.data[i].type_name+'|'+isChecked;
        this.bothData.push(both);
      }
    })
  }

  name(option:string){
    var strp=option.split("|");
    return strp[1]; 
  }

  counter_id(option:string){
    var strp=option.split("|");
    // sessionStorage.setItem('counterTopName',strp[1])
    // console.log(sessionStorage.getItem('counterTopName'))
    return strp[0];
  }

  func_id(name: string, option:string){
    sessionStorage.setItem('counterTopId',option)
    console.log(sessionStorage.getItem('counterTopId'))
    sessionStorage.setItem('counterTopName',name)
    console.log(sessionStorage.getItem('counterTopName'))
    sessionStorage.setItem('checkCounterTopsId', option)
  }
  
  checkIsCheck(option:string){
    var strp=option.split("|");
    return strp[2];
  }

}
