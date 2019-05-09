import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from 'src/app/service/reset/reset.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  paramAuthentication = "initial value";
  paramUserId = "initial value";
  show: boolean;
  password: string;
  message: string;

  myResetForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              public resetservice: ResetService) {
    this.myResetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords });
    console.log(this.myResetForm)
  }

  resetSubmit(){
    this.password= this.myResetForm.value.password
    console.log(this.password)
    this.resetservice.getPassword(this.password).subscribe(res=>{
      console.log(res);
      // this.id = res.data.user_id;
      // console.log(this.id)
      this.message = res.message;
      // console.log(this.message);
    //   setTimeout(() => {
    //     if(res.success){
    //       this.router.navigate(['/home']);
    //     }
    // }, 1000);  //1s
  })
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  ngOnInit(){
    this.route.queryParamMap.subscribe(queryParams => {
      this.paramAuthentication = queryParams.get("authentication_code");
      this.paramUserId = queryParams.get("user_id");
      console.log(this.paramAuthentication)
      console.log(this.paramUserId)
      sessionStorage.setItem('authenticationCode',  this.paramAuthentication)
      sessionStorage.setItem('userCode',  this.paramUserId)
    });

    
    if (this.myResetForm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
  }
  hide= true;
}

  