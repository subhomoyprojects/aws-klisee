import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';
import { BudgetCalculationService } from 'src/app/service/budget/budget-calculation.service';
import { CounterBudgetService } from 'src/app/service/budget/counter-budget.service';
import { ProjectNameService } from 'src/app/service/projectName/project-name.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myLoginFrm: FormGroup;
  id: string;
  show: boolean;
  message: string;
  success: boolean;
  a: boolean;
  projectId: string;

  constructor(public loginService: LoginService,
              public router: Router,
              public budgetCalculation: BudgetCalculationService,
              public counterBudget: CounterBudgetService,
              public projectName: ProjectNameService) 
  { 
      this.myLoginFrm = new FormGroup({
      email: new FormControl ('', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    
  }

  loginFormSubmit()
  {
    this.loginList()
  }

  loginList()
  {
    const details = 
    {
      'email': this.myLoginFrm.value.email,
      'password': this.myLoginFrm.value.password
    }
    // console.log(details)
    // console.log(this.myLoginFrm)
    // console.log(this.myLoginFrm)
    // console.log(this.myLoginFrm.status)
    //console.log(sessionStorage.getItem('saveProject'))
    if(sessionStorage.getItem('saveProject')=='true')
    {
      this.loginService.getuserId(details).subscribe(res=>{
        //console.log(res);
        this.message = res.message;
            // console.log(this.message);
            this.success = res.success;
            if(res.success)
            {
              this.a = false;
              this.message= res.message;
            }
            else
            {
              this.a= true;
              this.message= res.message;
            }
        sessionStorage.setItem('userId', res.data.user_id )
        //console.log(res.data.user_id);
        if(sessionStorage.getItem('projecttype')=='1') //for flooring project
        {
          this.budgetCalculation.getBudget().subscribe(res=>{
            //console.log(res)
            
            this.projectId= res.data.project_id
            // console.log(this.projectId)
            // sessionStorage.setItem('budgetProjectKey', this.projectId)
            // let projectId = sessionStorage.getItem('budgetProjectKey')
        // console.log(projectId)
            this.projectName.getProjectName(this.projectId).subscribe(res=>{
              console.log(res)
            })
            // console.log( sessionStorage.getItem('budgetProjectKey'))
          })
        }
        // console.log(sessionStorage.getItem('projecttype'))
        if(sessionStorage.getItem('projecttype')=='0') //for counterTops project
        {
            this.counterBudget.getCounterBudget().subscribe(res=>{
                // console.log(res)
                this.projectId= res.data.project_id
                // sessionStorage.setItem('budgetProjectKey', this.projectId)
                this.projectName.getProjectName(this.projectId).subscribe(res=>{
                  console.log(res)
                })
            })
        }

        // console.log(this.projectId)
        // console.log( sessionStorage.getItem('budgetProjectKey'))
        


        sessionStorage.setItem('saveProject', 'false')
        sessionStorage.setItem('projecttype', '')
        //console.log(sessionStorage.getItem('saveProject'));
        setTimeout(() =>
        {
          if(res.success)
          {
            this.router.navigate(['/my-account']);
          }
        }, 1000); 
      })
    }
    else
    {
          this.loginService.getuserId(details).subscribe(res=>{
            // console.log(res);
            // this.id = res.data.user_id;
            // console.log(this.id)
            this.message = res.message;
            // console.log(this.message);
            this.success = res.success;
            if(res.success)
            {
              this.a = false;
              this.message= res.message;
            }
            else
            {
              this.a= true;
              this.message= res.message;
            }
            sessionStorage.setItem('userId', res.data.user_id )

            // console.log(sessionStorage.getItem('userId'))
            setTimeout(() => 
            {
              if(res.success)
              {
                this.router.navigate(['/home']);
              }
          }, 1000);  //1s
        })
    // }, err=>{
    //   console.log(err);
    // } 
  }   
}


  ngOnInit()
  {
    // console.log(this.myLoginFrm)
    // console.log(sessionStorage.getItem('saveProject'))
    if (this.myLoginFrm.status==='VALID')
    {
      this.show=false;
    }
    else
    {
      this.show=true;
    } 
  }
  
  
  hide= true; //password hide
}
