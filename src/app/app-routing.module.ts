import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/Account/login/login.component';
import { DashboardComponent } from 'src/app/Account/dashboard/dashboard.component';
import { RecoverpasswordComponent } from 'src/app/Account/recoverpassword/recoverpassword.component';
import { VehiclesComponentComponent } from 'src/app/Vehicles/vehicles-component/vehicles-component.component';
import { TrainersComponent } from 'src/app/Trainer/trainers/trainers.component';
import { CustDetailsComponent } from 'src/app/Customer/cust-details/cust-details.component';
import { CustomersComponent } from 'src/app/Customer/customers/customers.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AuthGuard } from './services/guards/auth.guard';
import { CustProgressUpdateComponent } from './Customer/cust-progress-update/cust-progress-update.component';
import { UpdatevehicleComponent } from "src/app/Vehicles/updatevehicle/updatevehicle.component";
import { RequestsComponent } from "src/app/Customer/requests/requests/requests.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'recoverpassword', component: RecoverpasswordComponent },
  { path: 'vehicles', component: VehiclesComponentComponent, canActivate: [AuthGuard] },
  { path: 'trainers', component: TrainersComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'deletevehicle/:vehicleId', component: VehiclesComponentComponent },
  { path: 'deletetrainer/:trainerId', component: TrainersComponent },
  { path: 'updatevehicle/:vehicleId', component: UpdatevehicleComponent },
  { path: 'customerprogress/:customerId', component: CustProgressUpdateComponent },
  { path: 'customerdetails/:customerId', component: CustDetailsComponent },
  { path: 'request/:requestId', component:RequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
