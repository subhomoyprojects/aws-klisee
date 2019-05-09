import { Component, OnInit } from '@angular/core';
import { BudgetCalculationService } from 'src/app/service/budget/budget-calculation.service';
import { IBudget } from 'src/app/budgetfinal';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectNameService } from 'src/app/service/projectName/project-name.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-budget-calculation',
  templateUrl: './budget-calculation.component.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class BudgetCalculationComponent implements OnInit {

  title: string = sessionStorage.getItem('flooring')
  budgetMatArr: Array<IBudget>= [];
  budgetIntArr: Array<IBudget>= [];
  totalInstallationCost: string;
  totalMaterialCost: string;
  totalOverallCost: string;
  totalAvgCost: string;
  mode = 'indeterminate';
  // isloggedIn: boolean;
  // signUpValue: boolean;
  actual_square_footage: string;
  addded_for_wasted: string;
  flooring_needed: string;
  projectId: string;
  


  constructor(public budgetCalculation: BudgetCalculationService,
              public dialog: MatDialog) { 
   
  }


  //  for Assumption Modal  //
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent,{
      maxWidth: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  //  for Name Modal  //
  openEditNameModalDialog() {
    const dialogRef = this.dialog.open(EditNameModalComponent,{
      maxWidth: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // sessionStorage.setItem('saveProjectNameModal', 'true')
    // if(sessionStorage.getItem('saveProjectNameModal')){
    //   this.budgetCalculation.getBudget().subscribe(res=>{})
    // }
  }

  

  ngOnInit() 
  {
    sessionStorage.setItem('budgetValue', 'true') // Flooring Budget Page loads
    
    // console.log(sessionStorage.getItem('budgetValue'))
   // this.budgetSignUp= true;
    


      // Budget Calculation api
      this.budgetCalculation.getBudget().subscribe(res=>
    {
      console.log(res)
      this.totalInstallationCost= res.data.total_installation_cost;
      this.totalMaterialCost= res.data.total_material_cost;
      this.totalOverallCost= res.data.total_overall_cost;
      this.totalAvgCost= res.data.total_avg_cost;
      this.projectId= res.data.project_id
      sessionStorage.setItem('budgetProjectKey', this.projectId)
      // console.log(res.data.material_budget[0].field_name)


      for(let i: number = 0; i<res.data.material_budget.length; i++)
      {
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


      for(let i: number = 0; i<res.data.installation_budget.length; i++)
      {
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
      this.mode = 'determinate';
    })

    this.budgetCalculation.getAssumption().subscribe(res=>
    {
      console.log(res)
      this.actual_square_footage= res.data.actual_square_footage
      this.addded_for_wasted= res.data.addded_for_wasted
      this.flooring_needed= res.data.flooring_needed
      sessionStorage.setItem('floor', this.flooring_needed)
      sessionStorage.setItem('wasted', this.addded_for_wasted)
      sessionStorage.setItem('actual', this.actual_square_footage)
      // console.log(this.addded_for_wasted)
    })
  }

  roomData()
  {
    sessionStorage.getItem('roomDetails')
    sessionStorage.setItem('PreviousButtonClick', '1') //previos button click
    // console.log(sessionStorage.getItem('roomDetails'))
    // console.log('njnjbkj')
    
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class ModalComponent {

  floor: string;
  wasted: string;
  actual: string;


  constructor()
  {
    this.floor= sessionStorage.getItem('floor')
    this.wasted=sessionStorage.getItem('wasted')
    this.actual=sessionStorage.getItem('actual')
    // console.log('dsgdftg'+this.floor)
  }
}

@Component({
  selector: 'app-edit-name-modal',
  templateUrl: './edit-name-modal.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class EditNameModalComponent implements OnInit{


  signUpValue: boolean;
  isloggedIn: boolean;
  editName: FormGroup

  constructor(public projectName: ProjectNameService,
              public router: Router)

  // for Guest User
  {
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == '')
    {
      this.isloggedIn= false; 
    } 
    else
    {
      this.isloggedIn = true;
    }
  }

  ngOnInit()
  {

    this.editName = new FormGroup({
        name : new FormControl ('', [Validators.required]) 
    });

    if(this.isloggedIn && sessionStorage.getItem('budgetValue')=='true')
    {
      this.signUpValue = true; // LoggedIn User & after Budget Page
    }

  }


  // function call when signUpValue is false, that is Guest User 
  loginCheck(data)
  {
    console.log(this.editName.value.name)
    sessionStorage.setItem('saveProject', 'true') // login page after edit name modal
    sessionStorage.setItem('projecttype', data) // Which type of Project
    sessionStorage.setItem('projectName', this.editName.value.name)
    // .subscribe(res=>{
    //   console.log(res)
    // })
    
  }
  

  // function Call when signUpValue is true, that is logged User
  projectNameSave()
  {
    sessionStorage.setItem('projectName', this.editName.value.name)
    
    if(this.isloggedIn)
    {
        let projectId = sessionStorage.getItem('budgetProjectKey')
        this.projectName.getProjectName(projectId).subscribe(res=>
        {
          console.log(res.success)
          if(res.success) {
            this.router.navigate(['/my-account']);
          }
          
        })
    }
  }


}