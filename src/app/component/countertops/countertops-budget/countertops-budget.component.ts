import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { CounterBudgetService } from 'src/app/service/budget/counter-budget.service';
import { IBudget } from 'src/app/budgetfinal';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectNameService } from 'src/app/service/projectName/project-name.service';

@Component({
  selector: 'app-countertops-budget',
  templateUrl: './countertops-budget.component.html',
  styleUrls: ['./countertops-budget.component.css']
})
export class CountertopsBudgetComponent implements OnInit {

  totalInstallationCost: string;
  totalMaterialCost: string;
  totalOverallCost: string;
  totalAvgCost: string;
  budgetMatArr: Array<IBudget>= [];
  budgetIntArr: Array<IBudget>= [];
  squareBacksplash: string;
  squareCounter: string;
  squareIsland: string;
  squareFootage: string;
  signUpValue: boolean;
  isloggedIn: boolean;
  decisionBudget: boolean;
  projectId: string;

  constructor(public dialog: MatDialog,
              public counterBudget: CounterBudgetService,
              private router: Router) { } 
                // if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == ''){
                //   this.isloggedIn= false; 
                // } else {
                //   this.isloggedIn = true;
                // }
   
                
  // for assumption page open
  openDialog() {
    const dialogRef = this.dialog.open(CountertopModalComponent,{
      maxWidth: '750px',
      width:'100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //for name edit page open
  openCountertopEditNameModalDialog() {
    const dialogRef = this.dialog.open(EditCountertopNameModalComponent,{
      maxWidth: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // sessionStorage.setItem('saveProjectNameModal', 'true')
    // if(sessionStorage.getItem('saveProjectNameModal'))
    // {
    //   this.counterBudget.getCounterBudget().subscribe(res=>{})
    // }
  }


  ngOnInit() {
    sessionStorage.setItem('CounterbudgetValue', 'true') // Counter Budget Page loads
    // console.log(sessionStorage.getItem('CounterbudgetValue'))
   // this.budgetSignUp= true;
    // if(this.isloggedIn && sessionStorage.getItem('CounterbudgetValue')=='true'){
    //   this.signUpValue = true;
    // }
    this.counterBudget.getCounterBudget().subscribe(res=>{
      console.log(res)
      this.totalInstallationCost= res.data.total_installation_cost;
      this.totalMaterialCost= res.data.total_material_cost;
      this.totalOverallCost= res.data.total_overall_cost;
      this.totalAvgCost= res.data.total_avg_cost;
      this.projectId= res.data.project_id
      sessionStorage.setItem('counterBudgetProjectKey', this.projectId)
      for(let i: number = 0; i<res.data.material_budget.length; i++){
        // console.log(res.data.material_budget[i].field_name)
        let Bcost : IBudget;
        Bcost=
        { field_name: res.data.material_budget[i].field_name, 
          overall_cost: res.data.material_budget[i].overall_cost,
          standard_cost: res.data.material_budget[i].standard_cost,
          value: res.data.material_budget[i].value
        }
        this.budgetMatArr.push(Bcost); 
        // console.log(this.budgetMatArr)
      }
      for(let i: number = 0; i<res.data.installation_budget.length; i++){
        // console.log(res.data.material_budget[i].field_name)
        let Bcost : IBudget;
        Bcost=
        {
          field_name: res.data.installation_budget[i].field_name, 
          overall_cost: res.data.installation_budget[i].overall_cost,
          standard_cost: res.data.installation_budget[i].standard_cost,
          value: res.data.installation_budget[i].value
        }
        this.budgetIntArr.push(Bcost); 
        // console.log(this.budgetIntArr)
      }
    })
    this.counterBudget.getCounterAssumption().subscribe(res=>{
      console.log(res)
      this.squareBacksplash= res.data.total_square_feet_of_backsplash
      this.squareCounter= res.data.total_squarefeet_of_countertops
      this.squareIsland= res.data.total_squarefeet_of_island
      this.squareFootage= res.data.total_square_footage 
      sessionStorage.setItem('backsplash',  this.squareBacksplash)
      sessionStorage.setItem('counter', this.squareCounter)
      sessionStorage.setItem('island', this.squareIsland)
      sessionStorage.setItem('footage', this.squareFootage)
    })
    if(sessionStorage.getItem('decision')=='1'){
      this.decisionBudget = true;
    }
    else{
      this.decisionBudget = false;
    }
  }

  budgetSubmit(){
    if(this.decisionBudget== true){
      this.router.navigateByUrl('/peninsula-measure')
    }
    else{
      this.router.navigateByUrl('/countertop-floor-plan')
    }
  }

  // loginCheck(data){
  //   sessionStorage.setItem('saveProject', 'true')
  //   sessionStorage.setItem('projecttype', data)
  //   console.log(sessionStorage.getItem('projecttype'))
  // }
  

}

@Component({
  selector: 'app-countertop-modal',
  templateUrl: './countertop-modal.html',
  styleUrls: ['./countertops-budget.component.css']
})
export class CountertopModalComponent {

  backsplash: string;
  counter: string;
  island: string;
  footage: string;


  constructor(){
   this.backsplash= sessionStorage.getItem('backsplash')
   this.counter= sessionStorage.getItem('counter')
   this.island= sessionStorage.getItem('island')
   this.footage= sessionStorage.getItem('footage')
  }

}

@Component({
  selector: 'app-edit-countertop-name-modal',
  templateUrl: './edit-countertop-name-modal.html',
  styleUrls: ['./countertops-budget.component.css']
})
export class EditCountertopNameModalComponent {

  signUpValue: boolean;
  isloggedIn: boolean;
  editName: FormGroup

  constructor(public projectName: ProjectNameService,
              public router: Router){
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == ''){
      this.isloggedIn= false; 
    } 
    else{
      this.isloggedIn = true;
    }
  }

  
  ngOnInit(){

    this.editName = new FormGroup({
      name : new FormControl ('', [Validators.required]) 
    });

    if(this.isloggedIn && sessionStorage.getItem('CounterbudgetValue')=='true'){
      this.signUpValue = true;
    }

  }

  loginCheck(data){
    console.log(this.editName.value.name)
    sessionStorage.setItem('saveProject', 'true') // login page after save project
    sessionStorage.setItem('projecttype', data) // Which type of Project
    sessionStorage.setItem('projectName', this.editName.value.name)
    // .subscribe(res=>{
    //   console.log(res)
    // })
    
  }


  projectNameSave(){
    sessionStorage.setItem('projectName', this.editName.value.name)
    
    if(this.isloggedIn){
        let projectId = sessionStorage.getItem('counterBudgetProjectKey')
        this.projectName.getProjectName(projectId).subscribe(res=>{
        console.log(res.success)
        if(res.success) {
          this.router.navigate(['/my-account']);
        }
      })
    }
  }
}
