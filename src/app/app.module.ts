import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/Account/login/login.component';
import { DashboardComponent } from 'src/app/Account/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecoverpasswordComponent } from 'src/app/Account/recoverpassword/recoverpassword.component';
import { VehiclesComponentComponent } from 'src/app/Vehicles/vehicles-component/vehicles-component.component';

import { TrainersComponent } from 'src/app/Trainer/trainers/trainers.component';
import { CustomersComponent } from 'src/app/Customer/customers/customers.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustDetailsComponent } from 'src/app/Customer/cust-details/cust-details.component';
import { CustProgressUpdateComponent } from './Customer/cust-progress-update/cust-progress-update.component';
import { UpdatevehicleComponent } from './Vehicles/updatevehicle/updatevehicle.component';
import { RequestsComponent } from './Customer/requests/requests/requests.component';
import { PaymentComponent } from './Customer/payment/payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RecoverpasswordComponent,
    VehiclesComponentComponent,
    TrainersComponent,
    TrainersComponent,
    CustomersComponent,
    AnalyticsComponent,
    CustDetailsComponent,
    CustProgressUpdateComponent,
    UpdatevehicleComponent,
    RequestsComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MaterialModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    ChartsModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService) { }





}
