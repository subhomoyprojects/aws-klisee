import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetarialModule } from '../metarial/metarial.module';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OthersComponent } from './others/others.component';
import { BudgetAssumptionComponent } from './budget-assumption/budget-assumption.component';
import { BudgetCalculationComponent } from './budget-calculation/budget-calculation.component';
import { MaterialCostComponent } from './material-cost/material-cost.component';
import { ServiceHeadingComponent } from './service-heading/service-heading.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { YourRoomComponent } from './your-room/your-room.component';
import { LocationComponent } from './location/location.component';
import { StandardMaterialCostComponent } from './standard-material-cost/standard-material-cost.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ModalComponent } from './budget-calculation/budget-calculation.component';
import { CountertopsComponent } from './countertops/countertops/countertops.component';
import { CountertopDetailsComponent } from './countertops/countertop-details/countertop-details.component';
import { FloorplanComponent } from './countertops/floorplan/floorplan.component';
import { PeninsulaMeasureComponent } from './countertops/peninsula-measure/peninsula-measure.component';
import { CounterLocationComponent } from './countertops/counter-location/counter-location.component';
import { CountertopsBudgetComponent } from './countertops/countertops-budget/countertops-budget.component';
import { CountertopModalComponent } from './countertops/countertops-budget/countertops-budget.component';
import { EditNameModalComponent } from './budget-calculation/budget-calculation.component';
import { EditCountertopNameModalComponent } from './countertops/countertops-budget/countertops-budget.component';
import { CabinetsComponent } from './cabinets/cabinets/cabinets.component';
import { CabinetsLocationComponent } from './cabinets/cabinets-location/cabinets-location.component';
import { CabinetsFloorPlanComponent } from './cabinets/cabinets-floor-plan/cabinets-floor-plan.component';
import { CabinetsPeninsulaMeasureComponent } from './cabinets/cabinets-peninsula-measure/cabinets-peninsula-measure.component';
import { CommonKitchenLayoutsComponent } from './cabinets/common-kitchen-layouts/common-kitchen-layouts.component';
import { AccountDeleteModalComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FlooringComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    OthersComponent,
    BudgetAssumptionComponent,
    BudgetCalculationComponent,
    MaterialCostComponent,
    ServiceHeadingComponent,
    WorkTypeComponent,
    YourRoomComponent,
    LocationComponent,
    StandardMaterialCostComponent,
    MyAccountComponent,
    ModalComponent,
    CountertopsComponent,
    CountertopDetailsComponent,
    FloorplanComponent,
    PeninsulaMeasureComponent,
    CounterLocationComponent,
    CountertopsBudgetComponent,
    CountertopModalComponent,
    EditNameModalComponent,
    EditCountertopNameModalComponent,
    CabinetsComponent,
    CabinetsLocationComponent,
    CabinetsFloorPlanComponent,
    CabinetsPeninsulaMeasureComponent,
    CommonKitchenLayoutsComponent,
    AccountDeleteModalComponent
  ],
  entryComponents: [ModalComponent,CountertopModalComponent,EditNameModalComponent,EditCountertopNameModalComponent,AccountDeleteModalComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MetarialModule
  ]
})
export class ComponentModule { }
