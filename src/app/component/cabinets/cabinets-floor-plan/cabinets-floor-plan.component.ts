import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-cabinets-floor-plan',
  templateUrl: './cabinets-floor-plan.component.html',
  styleUrls: ['./cabinets-floor-plan.component.css']
})
export class CabinetsFloorPlanComponent implements OnInit {

  cabinetsFloorPlan: FormGroup;

  constructor() {
    this.cabinetsFloorPlan=new FormGroup({
      linearFeet1: new FormControl('', [Validators.required]),
      linearFeet2: new FormControl('',  [Validators.required]),
      linearFeet3: new FormControl('', [Validators.required]),
      linearFeet4: new FormControl('', [Validators.required]),
      linearFeet5: new FormControl('', [Validators.required]),
      linearFeet6: new FormControl('', [Validators.required])
    });
   }

  

  ngOnInit() {
  }

}
