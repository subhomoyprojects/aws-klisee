import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cabinets-peninsula-measure',
  templateUrl: './cabinets-peninsula-measure.component.html',
  styleUrls: ['./cabinets-peninsula-measure.component.css']
})
export class CabinetsPeninsulaMeasureComponent implements OnInit {

  cabinetsPeninsulaMeasure: FormGroup;
  constructor() {
    this.cabinetsPeninsulaMeasure=new FormGroup({
      peninsulaMeasure1: new FormControl('', [Validators.required]),
      peninsulaMeasure2: new FormControl('',  [Validators.required]),
      peninsulaMeasure3: new FormControl('', [Validators.required]),
      peninsulaMeasure4: new FormControl('', [Validators.required]),
      peninsulaMeasure5: new FormControl('', [Validators.required]),
      peninsulaMeasure6: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
  }

}
