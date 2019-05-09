import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})
export class FloorplanComponent implements OnInit {

  floorPlan: FormGroup;
  formArr: Array<any> =[];
  length: string;
  decisionBudget: boolean;
  j:number=0;
  show: boolean;
  k: boolean =false
  checkValue: boolean;
  lengthListsArr: any
  val1: string;
  val2: string;
  val3: string;
  val4: string;
  val5: string;
  // lengthArr: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              public myAccountService: MyAcoountService) { }



  ngOnInit() {
    
      console.log(sessionStorage.getItem('projectId'))
    if(sessionStorage.getItem('projectId')!='')
    {
      console.log(sessionStorage.getItem('projectId'))
      this.myAccountService.getCounterTopsDetails().subscribe(res=>{
        console.log(res.data.countertops_details)
        // let j=1;
      
        for(let i=0; i< res.data.countertops_details.length; i++){
        //   this.val1= res.data.countertops_details[i].countertops_length
        //   // if(value[0]){
        //   //   this.val1= value[0]
        //   // }
        if(i==0)
        {
          this.val1= res.data.countertops_details[i].countertops_length
        }
        if(i==1)
        {
          this.val2= res.data.countertops_details[i].countertops_length
        }
        if(i==2)
        {
          this.val3= res.data.countertops_details[i].countertops_length
        }
        if(i==3)
        {
          this.val4= res.data.countertops_details[i].countertops_length
        }
        if(i==4)
        {
          this.val5= res.data.countertops_details[i].countertops_length
        }
    }
          
          // this.val2= res.data.countertops_details[1].countertops_length
          // this.val3= res.data.countertops_details[2].countertops_length
          // this.val4= res.data.countertops_details[3].countertops_length
          // this.val5= res.data.countertops_details[4].countertops_length
        //   console.log(this.val1)
        
      
  
        // // let lengthLists= res.data.countertops_details
        // console.log(lengthLists[0].countertops_length)
        
        this.floorPlan= this.fb.group({
          length1: [this.val1, [Validators.required,  Validators.pattern("^[0-9]*$")]],
          length2: [this.val2, [Validators.pattern("^[0-9]*$")]],
          length3: [this.val3, [Validators.pattern("^[0-9]*$")]],
          length4: [this.val4, [Validators.pattern("^[0-9]*$")]],
          length5: [this.val5, [Validators.pattern("^[0-9]*$")]],
          floorPlanRooms: this.fb.array([])
        })
      })
    }
  else
  {

          // this.lengthListsArr= JSON.parse(lengthLists)
          // console.log(this.lengthListsArr)
          // this.val1= this.lengthListsArr[0].counter_top_length
          // this.val2= this.lengthListsArr[1].counter_top_length
          // this.val3= this.lengthListsArr[2].counter_top_length
          // this.val4= this.lengthListsArr[3].counter_top_length
          // this.val5= this.lengthListsArr[4].counter_top_length
          // console.log
        // }
      
    

    let lengthLists= sessionStorage.getItem('listDetails')
    if(lengthLists !='')
    {
      this.lengthListsArr= JSON.parse(lengthLists);
      // console.log(this.lengthListsArr)
      this.val1= this.lengthListsArr[0].counter_top_length
      this.val2= this.lengthListsArr[1].counter_top_length
      this.val3= this.lengthListsArr[2].counter_top_length
      this.val4= this.lengthListsArr[3].counter_top_length
      this.val5= this.lengthListsArr[4].counter_top_length
    }
  }

    
    
    this.floorPlan= this.fb.group({
      length1: [this.val1, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      length2: [this.val2, [Validators.pattern("^[0-9]*$")]],
      length3: [this.val3, [Validators.pattern("^[0-9]*$")]],
      length4: [this.val4, [Validators.pattern("^[0-9]*$")]],
      length5: [this.val5, [Validators.pattern("^[0-9]*$")]],
      floorPlanRooms: this.fb.array([])
    })
    if(sessionStorage.getItem('decision')=='1') //for island page open
    {
      this.decisionBudget = true;
    }
    else
    {
      this.decisionBudget = false;
    }
    // console.log(this.decisionBudget)
    if (this.floorPlan.status==='VALID')
    {
      this.show=false;
    }
    else
    {
      this.show=true;
    }
    
  }

  floorPlanSubmit()
  {

    this.formArr.push({"counter_top_length":this.floorPlan.value.length1})
    this.formArr.push({"counter_top_length":this.floorPlan.value.length2}),
    this.formArr.push({"counter_top_length":this.floorPlan.value.length3}),
    this.formArr.push({"counter_top_length":this.floorPlan.value.length4}),
    this.formArr.push({"counter_top_length":this.floorPlan.value.length5})
    // console.log(this.formArr)
    // console.log(this.floorPlan.status)


    // k is true when atleast value of one field is true
    let j: number;
    for(j=0; j<this.formArr.length; j++)
    {
      
      if(this.floorPlan.value.length1!='')
      {
        this.k=true
       
      }
      if(this.floorPlan.value.length2!='')
      {
        this.k=true
      }
      if(this.floorPlan.value.length3!='')
      {
        this.k=true
      }
      if(this.floorPlan.value.length4!='')
      {
        this.k=true
      }
      if(this.floorPlan.value.length5!='')
      {
        this.k=true
      }  
    }
    if(this.k==true && this.floorPlan.status==='VALID')
    {
      if(this.decisionBudget== true) // atleast one field = value, island page = yes
      {
        this.router.navigateByUrl('/peninsula-measure')
      }
      else{
        this.router.navigateByUrl('/countertop-budget') // atleast one field = value, island page = no
      }
    }
    else
    {
      // this.router.navigateByUrl('/countertop-floor-plan')
      this.checkValue = true;
    }
    let i: number;
    for(i=0; i<this.floorPlan.value.floorPlanRooms.length; i++)
    {
      this.formArr.push({"counter_top_length":this.floorPlan.value.floorPlanRooms[i].length})
    }
    // this.lengthArr = JSON.stringify(this.formArr)
    // console.log(this.lengthArr);
    sessionStorage.setItem('listDetails', JSON.stringify(this.formArr))
    // console.log(sessionStorage.getItem('listDetails'));

    // this.decisionBudget =  sessionStorage.getItem('decision')
    
  }

  get counterForms() 
  {
    return this.floorPlan.get('floorPlanRooms') as FormArray
  }


  //for dynamic length add
  addLength()
  {
    const newlength = this.fb.group({ 
      length: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]]
    })
    this.counterForms.push(newlength)
  }

}
