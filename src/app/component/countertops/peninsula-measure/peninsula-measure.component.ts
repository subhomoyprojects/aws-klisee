import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';

@Component({
  selector: 'app-peninsula-measure',
  templateUrl: './peninsula-measure.component.html',
  styleUrls: ['./peninsula-measure.component.css']
})
export class PeninsulaMeasureComponent implements OnInit {

  peninsulaForm: FormGroup;
  show: boolean;
  checkValue: boolean = true;
  peninsulaArr: Array<any> =[];
  islandListsArr: any;
  val1: string;
  val2: string;
  val3: string;
  val4: string;
  val5: string;
  val6: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              public myAccountService: MyAcoountService) {
    // if (this.peninsulaForm.status==='VALID'){
    //   this.show=false;
    // }
    // else{
    //   this.show=true;
    // }
  }

  ngOnInit() {

    console.log(sessionStorage.getItem('projectId'))
    if(sessionStorage.getItem('projectId')!='')
    {
      console.log(sessionStorage.getItem('projectId'))
      this.myAccountService.getCounterTopsDetails().subscribe(res=>{
        console.log(res.data.island_details)
        for(let i=0; i< res.data.island_details.length; i++){
          if(i==0)
          {
            this.val1 = res.data.island_details[i].island_length
            this.val2 = res.data.island_details[i].island_width
          }
          if(i==1)
          {
            this.val3 = res.data.island_details[i].island_length
            this.val4 = res.data.island_details[i].island_width
          }
          if(i==2)
          {
            this.val5 = res.data.island_details[i].island_length
            this.val6 = res.data.island_details[i].island_width
          }
        }


       this.peninsulaForm = this.fb.group({
          Length: [this.val1, [Validators.required,  Validators.pattern("^[0-9]*$")]],
          Width: [this.val2, [Validators.required,  Validators.pattern("^[0-9]*$")]],
          Length1: [this.val3, [Validators.pattern("^[0-9]*$")]],
          Width1: [this.val4, [Validators.pattern("^[0-9]*$")]],
          Length2: [this.val5, [Validators.pattern("^[0-9]*$")]],
          Width2: [this.val6, [Validators.pattern("^[0-9]*$")]]
        })
      })
    }
    let islandLists= sessionStorage.getItem('peninsulaDetails')
    if(islandLists !='')
    {
      this.islandListsArr= JSON.parse(islandLists);
      console.log(this.islandListsArr)
      this.val1= this.islandListsArr[0].length
      this.val2= this.islandListsArr[0].width
      this.val3= this.islandListsArr[1].length
      this.val4= this.islandListsArr[1].width
      this.val5= this.islandListsArr[2].length
      this.val6= this.islandListsArr[2].width
    }
    this.peninsulaForm = this.fb.group({
      Length: [this.val1, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      Width: [this.val2, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      Length1: [this.val3, [Validators.pattern("^[0-9]*$")]],
      Width1: [this.val4, [Validators.pattern("^[0-9]*$")]],
      Length2: [this.val5, [Validators.pattern("^[0-9]*$")]],
      Width2: [this.val6, [Validators.pattern("^[0-9]*$")]]
   })
  //  console.log(this.peninsulaForm.status)
   if (this.peninsulaForm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
    
  }

  peninsulaSubmit(){
    // console.log(this.peninsulaForm)
    this.peninsulaArr.push({"length":this.peninsulaForm.value.Length, "width":this.peninsulaForm.value.Width}),
    // this.peninsulaArr.push({"width":this.peninsulaForm.value.Width}),
    this.peninsulaArr.push({"length":this.peninsulaForm.value.Length1, "width":this.peninsulaForm.value.Width1}),
    // this.peninsulaArr.push({"width":this.peninsulaForm.value.Width1}),
    this.peninsulaArr.push({"length":this.peninsulaForm.value.Length2, "width":this.peninsulaForm.value.Width2}),
    // this.peninsulaArr.push({"width":this.peninsulaForm.value.Width2})
    // console.log(this.peninsulaArr)
    sessionStorage.setItem('peninsulaDetails', JSON.stringify(this.peninsulaArr))
    // console.log(sessionStorage.getItem('peninsulaDetails'))
    if(this.peninsulaForm.status==='VALID'){
      this.checkValue = true; // for showing the error if false
      // console.log(this.checkValue)
      this.router.navigateByUrl('/countertop-budget')
    }
    else{
      this.checkValue = false;
      this.router.navigateByUrl('/peninsula-measure')
      // console.log(this.checkValue)
    }
  }

  
}
