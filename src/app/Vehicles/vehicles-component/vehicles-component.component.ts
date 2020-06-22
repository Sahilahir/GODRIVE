import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from './core/vehicle.service';
import { Vehicle } from './core/vehicles';
import { DataSource } from '@angular/cdk/collections';
import { first, flatMap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-vehicles-component',
  templateUrl: './vehicles-component.component.html',
  styleUrls: ['./vehicles-component.component.css']
})
export class VehiclesComponentComponent implements OnInit {


  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute) { }

  vehicles: Vehicle[] = [];


  vehicleForm = this.formBuilder.group({
    id: [''],
    Vehicle_number: ['', [Validators.required]],
    Vehicle_name: ['', [Validators.required]],
    Insurance: ['', [Validators.required]],
    puc_date: [Date, [Validators.required]],
  })


  

  addVehicle() {
    console.log(this.vehicleForm.value)
    this.vehicleService
      .addVehicle(
        this.vehicleForm.value
      )
      .subscribe(
        vehicle => {
          console.log(vehicle);
          alert("Vehicle added Successfully.")
          this.vehicleForm.reset()
          this.router.navigate(['vehicles'])

        }
      )
  }
  

  gotoVehicles() {
    console.log("going to vehicles");
    this.router.navigate(['/vehicles']);
  }
  gotoTrainers() {
    console.log("going to trainers");
    this.router.navigate(['/trainers']);
  }
  gotoCustomers() {
    console.log("going to customers");
    this.router.navigate(['/customers']);
  }
  gotoAnalytics() {
    console.log("going to analytics");
    this.router.navigate(['/analytics']);
  }

  logout() {
    this.auth.logout();

  }

  ngOnInit() {

    this.vehicleService.getVehicles()
      .subscribe(
        vehicles => {
          this.vehicles = vehicles;
        },
        error => {

        },
        () => {

        }
      )
  }

  deleteVehicle() {
    console.log("in delete fun")
    this.activatedRoute.params
      .pipe(
        first(),
        flatMap(
          params => {
            if (params.vehicleId) {
              console.log("params", params);
              return this.vehicleService
                .deleteVehicle(params.vehicleId)
            } else {

              throwError({
                error: 'This will be required to add new vehicle.'
              })
            }
          }
        )
      )
      .subscribe(
        vehicle => {
          console.log("vehicle", vehicle)
          alert("Vehicle deleted successfully")
          this.router.navigate(['vehicles'])
        },
        error => {
          console.error(error);
        },
        () => {
          console.log('completed')
        }
      )

  }

  





}


