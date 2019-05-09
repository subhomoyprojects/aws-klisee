import { Component, OnInit } from '@angular/core';
import { StandardMaterialCostService } from 'src/app/service/standard/standard-material-cost.service';
import { IStandardMaterialCost } from 'src/app/standard_material';

@Component({
  selector: 'app-standard-material-cost',
  templateUrl: './standard-material-cost.component.html',
  styleUrls: ['./standard-material-cost.component.css']
})
export class StandardMaterialCostComponent implements OnInit {

  // service_costSf:Array<any> =[];
  // service_name: Array<any> = [];
  // service_casePack: Array<any> = [];
  // service_case_cost_pack:Array<any> = [];
  // service_shipping: Array<any> = [];
  costArr: Array<IStandardMaterialCost>= []

  constructor(public standardMaterial: StandardMaterialCostService) { }

  ngOnInit() {
    this.standardMaterial.getStandardMaterialCost().subscribe(res=>{
      // console.log(res)
      for(let i: number = 0; i<res.data.length; i++){
        let cost: IStandardMaterialCost;
        cost = {type_name: res.data[i].type_name, case_pack: res.data[i].case_pack, cost_sf: res.data[i].cost_sf, case_cost_pack: res.data[i].case_cost_pack, shipping: res.data[i].shipping};
        // console.log(cost)
        this.costArr.push(cost);
       
        // this.service_name.push(res.data[i].type_name);
        // // console.log(this.servicename)
        // this.service_casePack.push(res.data[i].case_pack);
        // this.service_costSf.push(res.data[i].cost_sf);
        // this.service_case_cost_pack.push(res.data[i].case_cost_pack);
        // this.service_shipping.push(res.data[i].shipping);
      }
    })
    // console.log(this.costArr)
  }

}
