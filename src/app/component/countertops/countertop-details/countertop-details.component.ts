import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MaterialCostService } from 'src/app/service/material/material-cost.service';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';


@Component({
  selector: 'app-countertop-details',
  templateUrl: './countertop-details.component.html',
  styleUrls: ['./countertop-details.component.css']
})
export class CountertopDetailsComponent implements OnInit {

  budget: string;
  needIslandPeninsula: string;
  addSplash: string;
  needSink: string;
  needPlumber: string;
  counterRemoved: string;
  howManySink: string;
  // modelName: string;
  sku: string;
  description: string;
  show: boolean;

  


  counterTopDetails: FormGroup;
  isActive: boolean;

  constructor(public defaultBudget: MaterialCostService,
              public myAccountService: MyAcoountService) 
  {
    console.log(sessionStorage.getItem('projectId'))
    if(sessionStorage.getItem('projectId')!='')
    {
      console.log(sessionStorage.getItem('projectId'))
      this.myAccountService.getCounterTopsDetails().subscribe(res=>{
        console.log(res.data)
        this.needIslandPeninsula = res.data.need_a_island
        this.addSplash = res.data.backsplash_need
        this.needSink = res.data.need_sink
        this.needPlumber = res.data.need_a_plumber
        this.counterRemoved = res.data.need_old_counter_removed
        this.howManySink = res.data.total_sink
        this.budget = res.data.sink_budget
        this.description = res.data.description
        // this.modelName = res.data.model_name
        this.sku = res.data.sku
        
        // let addSplash2=this.addSplash;
        // console.log(this.needIslandPeninsula)
        // console.log(this.addSplash)
        // console.log(this.needSink)
        // console.log(this.needPlumber)
        // console.log(this.counterRemoved)
        // console.log(this.howManySink)
        // console.log(this.budget)
        // console.log(res.data.need_old_counter_removed)

        this.counterTopDetails=new FormGroup({
          oldCounterRemoved: new FormControl(this.counterRemoved, [Validators.required]),
          needSinks: new FormControl (this.needSink, [Validators.required]),
          howManySink: new FormControl (this.howManySink, [Validators.pattern("^[0-9]*$")]),
          sinkBudget: new FormControl (this.budget, [Validators.pattern("^[0-9]*$")]),
          needPlumber: new FormControl (this.needPlumber, [Validators.required]),
          needIslandPeninsula: new FormControl (this.needIslandPeninsula, [Validators.required]),
          addSpalsh: new FormControl(this.addSplash, [Validators.required]),
          sku: new FormControl (this.sku),
          description: new FormControl (this.description) 
        });
      })

      this.counterTopDetails=new FormGroup({
        oldCounterRemoved: new FormControl(this.counterRemoved, [Validators.required]),
        needSinks: new FormControl (this.needSink, [Validators.required]),
        howManySink: new FormControl (this.howManySink, [Validators.pattern("^[0-9]*$")]),
        sinkBudget: new FormControl (this.budget, [Validators.pattern("^[0-9]*$")]),
        needPlumber: new FormControl (this.needPlumber, [Validators.required]),
        needIslandPeninsula: new FormControl (this.needIslandPeninsula, [Validators.required]),
        addSpalsh: new FormControl(this.addSplash, [Validators.required]),
        sku: new FormControl (this.sku),
        description: new FormControl (this.description) 
      });

    }
    
    else
    {
      if(sessionStorage.getItem('needIslandPeninsula')!='')
      {
        this.needIslandPeninsula = sessionStorage.getItem('needIslandPeninsula')
      }
      else
      {
        this.needIslandPeninsula = ''
      }
      if(sessionStorage.getItem('addSplash')!='')
      {
        this.addSplash = sessionStorage.getItem('addSplash')
      }
      else
      {
        this.addSplash = ''
      }
      if(sessionStorage.getItem('needSink')!='')
      {
        this.needSink = sessionStorage.getItem('needSink')
      }
      else
      {
        this.needSink = ''
      }
      if(sessionStorage.getItem('needPlumber')!='')
      {
        this.needPlumber = sessionStorage.getItem('needPlumber')
      }
      else
      {
        this.needPlumber = ''
      }
      if(sessionStorage.getItem('counterRemoved')!='')
      {
        this.counterRemoved = sessionStorage.getItem('counterRemoved')
      }
      else
      {
        this.counterRemoved = ''
      }
      if(sessionStorage.getItem('howManySink')!='')
      {
        this.howManySink = sessionStorage.getItem('howManySink')
      }
      else
      {
        this.howManySink = ''
      }
      // if(sessionStorage.getItem('modelName')!= ''){
      //   this.modelName = sessionStorage.getItem('modelName')
      // }
      // else{
      //   this.modelName = ''
      // }
      if(sessionStorage.getItem('sku')!= '')
      {
        this.sku = sessionStorage.getItem('sku')
      }
      else
      {
        this.sku = ''
      }
      if(sessionStorage.getItem('description')!= '')
      {
        this.description = sessionStorage.getItem('description')
      }
      else
      {
        this.description = ''
      }

      // let counterTopDetails2: FormGroup;

        this.counterTopDetails=new FormGroup({
        oldCounterRemoved: new FormControl(this.counterRemoved, [Validators.required]),
        needSinks: new FormControl (this.needSink, [Validators.required]),
        howManySink: new FormControl (this.howManySink, [Validators.pattern("^[0-9]*$")]),
        sinkBudget: new FormControl (this.budget, [Validators.pattern("^[0-9]*$")]),
        needPlumber: new FormControl (this.needPlumber, [Validators.required]),
        needIslandPeninsula: new FormControl (this.needIslandPeninsula, [Validators.required]),
        addSpalsh: new FormControl(this.addSplash, [Validators.required]),
        sku: new FormControl (this.sku),
        description: new FormControl (this.description) 
      });
    }
    
    console.log(this.counterTopDetails)
   }

   ngOnInit() 
   {
    this.isActive=false;
    // console.log(sessionStorage.getItem('budget'))
    if(sessionStorage.getItem('budget')!='')
    {
      this.budget = sessionStorage.getItem('budget')
    }
    if(sessionStorage.getItem('budget')== '' || sessionStorage.getItem('budget')== 'null')
    {
      // console.log("m")
      this.defaultBudget.getDefaultCountertopsCost().subscribe(res=>{
        // console.log(res)
        sessionStorage.setItem('budget', res.data.default_budget_material_cost)
        // console.log(sessionStorage.getItem('budget'))
        this.budget = res.data.default_budget_material_cost
      })
    }
    // else{
    //   this.defaultBudget.getDefaultCountertopsCost().subscribe(res=>{
    //     // console.log(res)
    //     sessionStorage.setItem('budget', res.data.default_budget_material_cost)
    //     this.budget= res.data.default_budget_material_cost
    //   })
    // }
  
  }


  // Island page open/close decision
  decision(y)
  {
    if(y==1){
      sessionStorage.setItem('decision', '1') // for peninsula open - yes
      // console.log(sessionStorage.getItem('decision'))
    }
    else{
      sessionStorage.setItem('decision', '0') // for peninsula open - no
      // console.log(sessionStorage.getItem('decision'))
    }
  }

  counterSubmit(){
    // console.log(this.counterTopDetails)
    // if(this.counterTopDetails.value.sinkBudget!=''){
    //   sessionStorage.setItem('budget', this.counterTopDetails.value.sinkBudget)
    //   console.log(sessionStorage.getItem('budget'))
    // }

    if (this.counterTopDetails.status==='VALID')
    {
      this.show=false;
    }
    else
    {
      this.show=true;
    }

    // console.log('dsew '+this.counterTopDetails.value.sinkBudget+' default'+sessionStorage.getItem('budget'))
    if(this.counterTopDetails.value.sinkBudget ==null || this.counterTopDetails.value.sinkBudget == '')
    {
      sessionStorage.setItem('budget', sessionStorage.getItem('budget')) // for default value
    }
    else{
      sessionStorage.setItem('budget', this.counterTopDetails.value.sinkBudget) // for input value
    }
    
    // console.log(sessionStorage.getItem('budget'))
    sessionStorage.setItem('counterRemoved', this.counterTopDetails.value.oldCounterRemoved)
    sessionStorage.setItem('needSink', this.counterTopDetails.value.needSinks)
    // sessionStorage.setItem('modelName', this.counterTopDetails.value.modelNumber)
    sessionStorage.setItem('sku', this.counterTopDetails.value.sku)
    sessionStorage.setItem('description', this.counterTopDetails.value.description)
    sessionStorage.setItem('howManySink', this.counterTopDetails.value.howManySink)
    sessionStorage.setItem('needPlumber', this.counterTopDetails.value.needPlumber)
    sessionStorage.setItem('addSplash', this.counterTopDetails.value.addSpalsh)
    sessionStorage.setItem('needIslandPeninsula', this.counterTopDetails.value.needIslandPeninsula)
    // console.log(sessionStorage.getItem('counterRemoved'))
    // console.log(sessionStorage.getItem('needSink'))
    // console.log(sessionStorage.getItem('howManySink'))
    // console.log(sessionStorage.getItem('needPlumber'))
    // console.log(sessionStorage.getItem('addSplash'))
    // console.log(sessionStorage.getItem('needIslandPeninsula'))
    // console.log(this.counterTopDetails)
    // console.log(sessionStorage.getItem('needSink'))
  }


}
