import { Component, OnInit } from '@angular/core';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';
import { IAccount } from 'src/app/account';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  projectDetails: Array<IAccount>= [];
  bothValue: Array<string> = [];
  dataSource: any;
  subTypeid: string;
  isloggedIn: boolean;

  constructor(public myAccountService: MyAcoountService,
              public router: Router, public dialog: MatDialog) { }

  LogOut(){
    sessionStorage.setItem('userId','')
    sessionStorage.setItem('projectId', '')
  }

  ngOnInit() {
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == ''){
      this.isloggedIn = false;
    } else {
      this.isloggedIn= true; 
    }
    // sessionStorage.setItem('saveProjectNameModal', 'false')
    sessionStorage.setItem('needIslandPeninsula', '')
    sessionStorage.setItem('peninsulaDetails', '')
    sessionStorage.setItem('addSplash', '')
    sessionStorage.setItem('needSink', '')
    sessionStorage.setItem('needPlumber', '')
    sessionStorage.setItem('counterRemoved', '')
    sessionStorage.setItem('howManySink', '')
    sessionStorage.setItem('budget', '')
    sessionStorage.setItem('modelName', '')
    sessionStorage.setItem('sku', '')
    sessionStorage.setItem('description', '')


    sessionStorage.setItem('PreviousButtonClick', '0')
    // sessionStorage.setItem('floorId', '')
    this.myAccountService.getMyAccount().subscribe(res=>{
      console.log(res)
      for(let i=0; i<res.data.length; i++)
      {
        let model: IAccount;
        model= {project_name: res.data[i].project_name, project_type: res.data[i].project_type, project_budgets: res.data[i].project_budgets, project_id: res.data[i].project_id, created_date: res.data[i].created_date}
        this.projectDetails.push(model)
      }
      // console.log(this.projectDetails)
      for(let i=0; i<this.projectDetails.length; i++){
        let name: string;
        name = res.data[i].project_id+'|'+res.data[i].project_name+ '|' +res.data[i].project_budgets+ '|' +res.data[i].project_type+ '|' +res.data[i].created_date;
        this.bothValue.push(name)
        this.dataSource = new MatTableDataSource(this.projectDetails);
        // console.log(this.dataSource)
      }
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  accountId(option:string){
    var strp=option.split("|");
    return strp[0];
  }

  accountBudget(option:string){
    var strp=option.split("|");
    return strp[2];
  }

  accountName(option:string){
    var strp=option.split("|");
    return strp[1];
  }
  projectType(option: string){
    var strp=option.split("|");
    return strp[3];
  }
  dateCreated(option: string){
    var strp=option.split("|");
    return strp[4];
  }

  getId(id:string, name: string){
    sessionStorage.setItem('projectId', id)
    // console.log(sessionStorage.getItem('projectId'))
    sessionStorage.setItem('projectType', name)
    console.log(sessionStorage.getItem('projectId'));
    console.log(sessionStorage.getItem('projectType'));
    if(sessionStorage.getItem('projectType')=='flooring'){
      this.myAccountService.getFlooringDetails().subscribe(res=>{
        console.log(res.data)
        // console.log(res.data.fk_sub_sub_type_id)
        
        // this.subTypeid=res.data.fk_sub_sub_type_id
        // console.log(this.subTypeid)
          // sessionStorage.setItem('sku', res.data.SKU)
          // sessionStorage.setItem('casePack', res.data.case_pack_size)
          // sessionStorage.setItem('ModelId', res.data.fk_remodel_type_id)
          sessionStorage.setItem('flooringId', res.data.fk_remodel_subtype_id)
          console.log(sessionStorage.getItem('flooringId'))
          // sessionStorage.setItem('floorId',  this.subTypeid)
          // console.log(sessionStorage.getItem('floorId'))
          // sessionStorage.setItem('manufacturer', res.data.material_name)
          // sessionStorage.setItem('priceSquare', res.data.price_per_sf)
          // sessionStorage.setItem('roomDetails', res.data.room_details)
          // sessionStorage.setItem('place', res.data.zipcode)
          this.router.navigateByUrl('/flooring?id='+ res.data.fk_sub_sub_type_id)
      })
      
    }
    if(sessionStorage.getItem('projectType')=='countertops'){
    
      this.myAccountService.getCounterTopsDetails().subscribe(res=>{
        console.log(res.data)
          // sessionStorage.setItem('addSplash', res.data.backsplash_need)
          // sessionStorage.setItem('listDetails', res.data.countertops_details)
          // sessionStorage.setItem('ModelId', res.data.fk_remodel_type_id)
          sessionStorage.setItem('counterId', res.data.fk_remodel_subtype_id)
          // sessionStorage.setItem('floorId', res.data.fk_sub_sub_type_id)
          // sessionStorage.setItem('peninsulaDetails', res.data.island_details)
          // sessionStorage.setItem('needIslandPeninsula', res.data.need_a_island)
          // sessionStorage.setItem('needPlumber', res.data.need_a_plumber)
          // sessionStorage.setItem('counterRemoved', res.data.need_old_counter_removed)
          // sessionStorage.setItem('needSink', res.data.need_sink)
          // sessionStorage.setItem('budget', res.data.sink_budget)
          // sessionStorage.setItem('howManySink', res.data.total_sink)
          // sessionStorage.setItem('place', res.data.zipcode)
          this.router.navigateByUrl('/countertop?id='+ res.data.fk_sub_sub_type_id)
      })
      
    }
  }

 //  for Delete Modal  //
 openAccountDeleteModalDialog() {
  const dialogRef = this.dialog.open(AccountDeleteModalComponent,{
    maxWidth: '700px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}

@Component({
  selector: 'app-account-delete-modal',
  templateUrl: './account-delete-modal.html',
  styleUrls: ['./my-account.component.css']
})
export class AccountDeleteModalComponent implements OnInit{

  constructor(){}

  ngOnInit(){}
}
