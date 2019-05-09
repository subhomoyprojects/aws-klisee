import { Component, OnInit } from '@angular/core';
// import { trigger, style, animate, transition } from '@angular/animations';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlooringService } from 'src/app/service/flooring/flooring.service';
import { IFloor } from 'src/app/floortype';
import { ActivatedRoute } from '@angular/router';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';


@Component({
  selector: 'app-flooring',
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css'],
  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({transform: 'translateX(100%)'}),
  //       animate('200ms ease-in', style({transform: 'translateX(0%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({transform: 'translateX(100%)'}))
  //     ])
  //   ])
  // ]
})
export class FlooringComponent implements OnInit {


  floorArr: Array<IFloor> = []
  flooring_list: Array<string> = [];
  flooring_id: Array<string> = [];
  title: string = sessionStorage.getItem('flooring');
  options: Array<string> = [];
  firstValue: string;
  floorID: any;
  
 


  constructor(public flooring_service: FlooringService,
              private readonly route: ActivatedRoute,
              public myAccountService: MyAcoountService){}

  ngOnInit() {
    if(sessionStorage.getItem('projectId')!=''){
      // console.log(sessionStorage.getItem('projectId'))
      // this.myAccountService.getFlooringDetails().subscribe(res=>{
      //   console.log(res)
        this.route.queryParamMap.subscribe(queryParams => {
        this.floorID  = queryParams.get("id")
        // console.log('CHK1 '+this.floorID);
        if(this.floorID > 0){
          sessionStorage.setItem('checkFlorringId', this.floorID) // for checking in material cost page & service page
        }
        
       // sessionStorage.setItem('floorId',this.floorID);
       })
      // })
    }
    else{
      this.floorID= sessionStorage.getItem('floorId')
    }
    // this.floorID=sessionStorage.getItem('floorId');
    // console.log(this.floorID)    
    this.flooring_service.getFlooringList().subscribe(res=>{
      console.log(res)
      let isChecked:boolean;
      let i: number;
      for(i=0; i<res.data.length; i++){
        this.flooring_list.push(res.data[i].type_name);
        this.flooring_id.push(res.data[i].id);
        // console.log(this.flooring_id)
        // console.log(localStorage.getItem('floorId'))
        let model: IFloor;
        model = {floor_id: res.data[i].id, floor_name: res.data[i].type_name};
        this.floorArr.push(model)
      }
      
      for(i=0; i<this.floorArr.length; i++){
        let both: string;
        isChecked=false;
        // console.log('CHK '+sessionStorage.getItem('checkFlorringId'));
        if(sessionStorage.getItem('checkFlorringId')==res.data[i].id){
          isChecked=true; // for checked input
        }
        both = res.data[i].id+'|'+ res.data[i].type_name+'|'+isChecked;
        this.options.push(both);
        // console.log(this.options)
        if(i==0){
          this.firstValue= res.data[i].id
        }
      }
    })

    
    
  }

  name(option:string){
    var strp=option.split("|");
    return strp[1];
  }

  floor_id(option:string){
    var strp=option.split("|");
    return strp[0];
  }

  fun_id(option:string){
    sessionStorage.setItem('floorId',option)
    sessionStorage.setItem('checkFlorringId', option) 
    console.log(sessionStorage.getItem('floorId'))
    // sessionStorage.setItem('checkFlorringId', this.floorID)
   }

  checkIsCheck(option:string){
    var strp=option.split("|");
    return strp[2];
  }
  //  func(option){
  //   // sessionStorage.setItem('flrId',option)
  //  }

  // getId(i){
    
  //   sessionStorage.setItem('floorId', i)
  //    console.log(sessionStorage.getItem('floorId'))
  // }
  visible:boolean = false;
}
