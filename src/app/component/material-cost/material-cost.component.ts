import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialCostService } from 'src/app/service/material/material-cost.service';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';

@Component({
  selector: 'app-material-cost',
  templateUrl: './material-cost.component.html',
  styleUrls: ['./material-cost.component.css']
})
export class MaterialCostComponent implements OnInit {
  materialCost: FormGroup;
  case_pack: string;
  cost_sf: string;
  manufacturer: string;
  sku: string;
  floor_type_id: string=sessionStorage.getItem('floorId')
  show: boolean;
  
  constructor(public myAccountService: MyAcoountService,
              public materialCostService: MaterialCostService) { 
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      pricePerSquerFeet: new FormControl ('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      manuFacturer: new FormControl ('', [Validators.required]),
      sku: new FormControl ('')
    })
  }

  ngOnInit() {
    //localStorage.removeItem('floorId')
  //  console.log(this.floor_type_id);
  if (this.materialCost.status==='VALID'){
    this.show=false;
  }
  else{
    this.show=true;
  }
      console.log(this.materialCost)
      if(sessionStorage.getItem('projectId')!=''){
        console.log(sessionStorage.getItem('projectId'))
        this.myAccountService.getFlooringDetails().subscribe(res=>{
          console.log(res)
          // console.log(sessionStorage.getItem('checkFlorringId'))
          // console.log(sessionStorage.getItem('floorId'))
          // console.log(res.data.fk_sub_sub_type_id)
          if(sessionStorage.getItem('checkFlorringId') == res.data.fk_sub_sub_type_id){
            this.case_pack= res.data.case_pack_size
            this.cost_sf= res.data.price_per_sf
            this.manufacturer= res.data.material_name
            this.sku= res.data.SKU
            sessionStorage.setItem('casePack', this.case_pack)
            sessionStorage.setItem ('priceSquare', res.data.price_per_sf)
            sessionStorage.setItem('manufacturer', res.data.material_name)
            sessionStorage.setItem('sku', res.data.SKU)
            console.log('dgh')
            this.materialCost=new FormGroup({
              casePackSize: new FormControl(res.data.case_pack_size, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
              pricePerSquerFeet: new FormControl (res.data.price_per_sf, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
              manuFacturer: new FormControl (res.data.material_name, [Validators.required]),
              sku: new FormControl (res.data.SKU)
            })
            // console.log(this.case_pack)
            // console.log('dgh')
            // console.log('dgh')
          }
        else{
            this.materialCostService.getMaterialCost(this.floor_type_id).subscribe(res=>{
              console.log(res);
              // console.log('b')
              sessionStorage.setItem('casePack', res.data.case_pack)
              sessionStorage.setItem ('priceSquare', res.data.cost_sf)
              sessionStorage.setItem('manufacturer', res.data.material_name)
              
              this.case_pack= res.data.case_pack;
              this.cost_sf= res.data.cost_sf;
              this.manufacturer= res.data.material_name;
              this.materialCost=new FormGroup({
                casePackSize: new FormControl(res.data.case_pack, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
                pricePerSquerFeet: new FormControl (res.data.cost_sf, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
                manuFacturer: new FormControl (res.data.material_name, [Validators.required]),
                sku: new FormControl (res.data.SKU)
              })
              console.log('pppbu')
          })
        }
      })
    }
    else{
      this.materialCostService.getMaterialCost(this.floor_type_id).subscribe(res=>{
        // console.log(res);
        sessionStorage.setItem('casePack', res.data.case_pack)
        sessionStorage.setItem ('priceSquare', res.data.cost_sf)
        sessionStorage.setItem('manufacturer', res.data.material_name)
        
        this.case_pack= res.data.case_pack;
        this.cost_sf= res.data.cost_sf;
        this.manufacturer= res.data.material_name;
        console.log('aaadssf')
        this.materialCost=new FormGroup({
          casePackSize: new FormControl(res.data.case_pack, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
          pricePerSquerFeet: new FormControl (res.data.cost_sf, [Validators.required, Validators.pattern("[0-9]+([,\.][0-9]+)?")]),
          manuFacturer: new FormControl (res.data.material_name, [Validators.required]),
          sku: new FormControl ('')
        })
      })
    }
  
    // console.log(sessionStorage.getItem('projectId'))
  }

  materialCostSubmit(){
    // console.log(this.materialCost.value.casePackSize);
    // console.log(this.materialCost.value.pricePerSquerFeet);
    // console.log(this.materialCost.value.manuFacturer);
    // if(this.materialCost.controls.casePackSize.dirty){

    // }
    console.log(this.materialCost)
    if(this.materialCost.value.casePackSize!=''){
      sessionStorage.setItem('casePack', this.materialCost.value.casePackSize)
    }
    if(this.materialCost.value.pricePerSquerFeet!=''){
      sessionStorage.setItem ('priceSquare', this.materialCost.value.pricePerSquerFeet)
    }
    if(this.materialCost.value.manuFacturer!=''){
      sessionStorage.setItem('manufacturer', this.materialCost.value.manuFacturer)
    }
    if(this.materialCost.value.sku!=''){
      sessionStorage.setItem('sku', this.materialCost.value.sku)
    }
  }

}

