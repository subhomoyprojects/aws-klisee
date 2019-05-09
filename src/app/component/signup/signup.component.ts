import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignUpService } from 'src/app/service/signup/sign-up.service';
import { Router } from '@angular/router';
// import { PasswordValidation } from '../../password-validation';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  myForm: FormGroup;
  show: boolean;
  id: string;
  message: string;
  password: string;
  confirm_password: string;
  success: boolean;
  isloggedIn: boolean;
  signupChange: boolean;
  a: boolean;
  
  constructor(public signupService: SignUpService,
              public router: Router,
              private formBuilder: FormBuilder) { 
    this.myForm=this.formBuilder.group({
      name: ['', [Validators.required,  Validators.pattern("^[a-zA-Z ]*$")]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]]
    }, { validator: this.checkPasswords })
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == ''){
      this.isloggedIn= false; 
    } else {
      this.isloggedIn = true;
    }
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirm_password.value;

  return pass === confirmPass ? null : { notSame: true }
}
    //   {
    //     validator: PasswordValidation.MatchPassword // your validation method
      
    // })



  
  FormSubmit(){
    this.getList();
  }
  getList(){
    const user = {
      'name' : this.myForm.value.name,
      'email': this.myForm.value.email,
      'password': this.myForm.value.password
    }
    // console.log(user)
    // console.log(this.myForm)
    
    this.signupService.getUserId(user).subscribe(res=>{
      console.log(res);
      // this.id = res.data.user_id;
      // console.log(this.id);
      this.message = res.message;
      console.log(this.message);
      this.success = res.success;     
      if(res.success){
        this.a = false;
        this.message= res.message;
      }
      else{
        this.a= true;
        this.message= res.message;
      }
      // setTimeout(() => {
      //     this.router.navigate(['/login']);
      // }, 1000);  //1s
      setTimeout(() => {
        if(res.success){
          this.router.navigate(['/login']);
        }
    }, 1000); 
    })
  }

  ngOnInit(){
    
    if(!this.isloggedIn && sessionStorage.getItem('budgetValue')=='false'){
      this.signupChange = true;
    }
    if(!this.isloggedIn && sessionStorage.getItem('budgetValue')=='true'){
      this.signupChange = false;
    }
    if (this.myForm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
  }

  // onSubmit(){
  //   console.log(this.myForm)
  //   if (this.myForm.status==='VALID'){
  //     this.show=false;
  //   }
  //   else{
  //     this.show=true;
  //   }

  
  
  
  // }

  hide = true;
  

}
