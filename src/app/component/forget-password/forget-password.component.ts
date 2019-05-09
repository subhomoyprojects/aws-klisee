import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/service/forget/forget-password.service';
import { Router } from '@angular/router';
// import { ParamMap, Router, ActivatedRoute } from '@angular/router';
// import { Router, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{

  params: string;
  show: boolean;
  msg: string;

  myForgetFrm: FormGroup;

  constructor(public forgetService: ForgetPasswordService,
              public router: Router) { 
    this.myForgetFrm = new FormGroup({
      email: new FormControl ('', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
    })
    // const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    // console.log(snapshot)
  }

  ngOnInit(){
    // console.log(this.route.snapshot.queryParamMap);
    // const paramId = this.route.snapshot.queryParamMap.params.userid;
    // console.log(paramId)
    
    // console.log(snapshot); 
    if (this.myForgetFrm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
  }

  forgetSubmit(){
    const userEmail=  this.myForgetFrm.value.email;
    // console.log(userEmail)
    this.forgetService.getEmail(userEmail).subscribe(res=>{
        console.log(res)
        console.log(res.message)
        this.msg = res.message;
      //   setTimeout(() => {
      //     if(res.success){
      //       this.router.navigate(['/reset-password']);
      //     }
      // }, 1000);
      })
  }

}
