import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ParentremodelService } from 'src/app/service/parentremodel/parentremodel.service';
import { IModel } from 'src/app/parentmodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isloggedIn: boolean;
  dataArr1: Array<IModel> = []//[IModel];//Array<IModel[]>;
  reModelId: string;
  OptionId: string;
  // budgetSignUp: string;
  //nameArr: Array<string> = []
  
  // options: any;

  myControl = new FormControl();
  options: Array<string> = []//= ['Kitchen remodel', 'Bathroom remodel', 'Other'];
  filteredOptions: Observable<string[]>;

  constructor(public modelservice: ParentremodelService) {
    this.isloggedIn = false;
    
  }

  ngOnInit() {
    console.log('is login:'+sessionStorage.getItem('userId'));
    sessionStorage.setItem('PreviousButtonClick', '0')
    sessionStorage.setItem('projectId', '')
    // this.budgetSignUp = 'false';
    sessionStorage.setItem('budgetValue', 'false')
    sessionStorage.setItem('CounterbudgetValue', 'false')
    console.log(sessionStorage.getItem('budgetValue'))
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == ''){
      this.isloggedIn= false; 
    } else {
      this.isloggedIn = true;
    }
    this.modelservice.getMainModel().subscribe(res=>
      {
        //console.log(res);
        //this.data = res.data;
        //console.log(this.data[0].remodel_id)
        let i: number = 0;
        // let model: IModel = {remodel_id: res.data[i].remodel_id, remodel_name: res.data[i].remodel_name};
        // this.dataArr1.push(model)
        //console.log(this.dataArr1)
        for(i=0; i<3; i++)
        {
          //
          let model: IModel;
          model = {remodel_id: res.data[i].remodel_id, remodel_name: res.data[i].remodel_name};
          // console.log(i)
          // console.log(model)
          this.dataArr1.push(model)
          //sessionStorage.setItem('modelId', res.data[2].remodel_id )
          // console.log(this.dataArr1)
          
        }
        // console.log(res.data[2].remodel_id)
        //console.log(this.dataArr1)
        for(i=0; i<3; i++)
        {
          let model= this.dataArr1[i]
          // console.log(i+"th name= "+model.remodel_name)
        }

        for(i=0; i<this.dataArr1.length; i++)
        {
          let name: string;
          name = res.data[i].remodel_id+'|'+res.data[i].remodel_name;
          this.options.push(name);
          // console.log(this.options)
        }
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        // this.OptionId = res.data[2].remodel_id 

      })
      // sessionStorage.setItem('saveProjectNameModal', 'false')
      sessionStorage.setItem('counterTopId', '')
      sessionStorage.setItem('place', '')
      sessionStorage.setItem('floorId', '')
      sessionStorage.setItem('needIslandPeninsula', '')
      sessionStorage.setItem('peninsulaDetails', '')
      sessionStorage.setItem('addSplash', '')
      sessionStorage.setItem('needSink', '')
      sessionStorage.setItem('needPlumber', '')
      sessionStorage.setItem('counterRemoved', '')
      sessionStorage.setItem('howManySink', '')
      sessionStorage.setItem('budget', '')
      sessionStorage.setItem('checkFlorringId', '')
      sessionStorage.setItem('checkCounterTopsId', '')
      sessionStorage.setItem('modelName', '')
      sessionStorage.setItem('sku', '')
      sessionStorage.setItem('description', '')
  }
  
  LogOut()
  {
    sessionStorage.setItem('userId','')
    sessionStorage.setItem('projectId', '')
  }

  private _filter(value: string): string[] 
  {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    //return ["1|Palash"];

  }
  
  val(option:string)
  {
    var strp=option.split("|");
    return strp[1];
  }

  model_id(option:string)
  {
    var strp=option.split("|");
    return strp[0];
  }

   fun_id(option:string)
   {
    sessionStorage.setItem('reModelId',option)
    sessionStorage.setItem('ModelId',option)
   }

   routerLink()
   {
     var reModelId=sessionStorage.getItem('reModelId');
      if(reModelId=='3')
      {
        return '/others';
      }
      else
      {
        return '/home';
      }
   }

}
