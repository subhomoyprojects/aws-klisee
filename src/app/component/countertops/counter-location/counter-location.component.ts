import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/service/location/location.service';
import { Router } from '@angular/router';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';

@Component({
  selector: 'app-counter-location',
  templateUrl: './counter-location.component.html',
  styleUrls: ['./counter-location.component.css']
})
export class CounterLocationComponent implements OnInit {

  place: string;
  message: string;
  a: boolean;
  pinCode: string;
  pincodeValid: boolean;
  show: boolean;


  myLocationFrm: FormGroup;

  constructor(public locationService: LocationService,
              public router: Router,
              public myAccountService: MyAcoountService) 
    {
      this.a= true;
      this.myLocationFrm = new FormGroup({
        place: new FormControl('', [Validators.required, Validators.minLength(5)])
      })
    }

  ngOnInit() {
    
    // console.log(this.myLocationFrm)
    if(sessionStorage.getItem('projectId')!='')
    {
        console.log(sessionStorage.getItem('projectId'))
        this.myAccountService.getFlooringDetails().subscribe(res=>{
        console.log(res.data.zipcode)
        this.pinCode= res.data.zipcode
        this.pincodeValid = true; // for showing the message that is pincode is true for logged user
        sessionStorage.setItem('place', this.pinCode)
        this.locationService.getLocation(this.pinCode).subscribe(res=>{
          // console.log(res)
          if(res.success)
          {
            this.a = false;
            this.message= res.data.city;
          }
          else
          {
            this.a= true;
            this.message= res.message
          }
        })
      })
    }
    if(sessionStorage.getItem('projectId')==''){
      this.pinCode=sessionStorage.getItem('place')
      if(this.pinCode.length===5){
        this.pincodeValid = true; // for showing the message that is pincode is true for logged user
      this.locationService.getLocation(this.pinCode).subscribe(res=>{
        // console.log(res)
        if(res.success){
          this.a = false;
          this.message= res.data.city;
        }
        else{
          this.a= true;
          this.message= res.message
        }
      })
    }
    }
    // sessionStorage.setItem('roomDetails', '')
  }

  locationSubmit(){
    // sessionStorage.setItem('place', this.myLocationFrm.value.place)
    console.log(this.pincodeValid)
    if(this.pincodeValid){
      this.place= sessionStorage.getItem('place')
      this.router.navigate(['/countertop-details'])
      // this.show=false;
    }
    else{
      this.show=true;
      this.router.navigate(['/countertop-location'])
    }

    // this.locationService.getLocation(this.place).subscribe(res=>{
    //   // console.log(res)
    //   if(res.success){
    //     this.a = false;
    //     this.message= res.data.city;
    //   }
    //   else{
    //     this.a= true;
    //     this.message= res.message
    //   }
    // })
    // setTimeout(() => {
    //   this.router.navigate(['/materialcost'])
    // }, 3000)
  }

  getLocation(event: any){
    let pincode=event.target.value;
    // console.log(pincode);
    sessionStorage.setItem('place', pincode)
    console.log(sessionStorage.getItem('place'))
    if(pincode.length===5){
      this.pincodeValid = true; // for showing the message that is pincode is true for new user
      this.locationService.getLocation(pincode).subscribe(res=>{
        // console.log(res)
        if(res.success){
          this.a = false; // for showing the location if true
          this.message= res.data.city;
        }
        else{
          this.a= true;
          this.message= res.message
        }
      })
      }
      else{
        this.message= ''
        this.pincodeValid = false; // for showing the message that is pincode is false
      }
  }

  //for preventing >5 digits and e
  onKeydown(event) {
    // console.log(event.keyCode)
      let pincode=event.target.value;
      if(pincode.length > 4 || event.keyCode==101){
        return false;
      }
    }

}
