import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../vehicles-component/core/vehicle.service';
import { first, flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-updatevehicle',
  templateUrl: './updatevehicle.component.html',
  styleUrls: ['./updatevehicle.component.css']
})
export class UpdatevehicleComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute
  ) { }


  vehicleUpdateForm = this.formBuilder.group({
    id: [''],
    Vehicle_number: ['', [Validators.required]],
    Vehicle_name: ['', [Validators.required]],
    Insurance: ['', [Validators.required]],
    puc_date: [Date, [Validators.required]],
  })

  updateVehicle() {
    console.log(this.vehicleUpdateForm.value)
    this.vehicleService
      .updateVehicle(this.vehicleUpdateForm.value.vehicleId, this.vehicleUpdateForm.value)
      .subscribe(
        vehicle => {
          //console.log(vehicle);
          alert("Vehicle updated Successfully.")
          this.vehicleUpdateForm.reset()
          this.router.navigate(['vehicles'])

        }
      )
  }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      first(),
      flatMap(
        params => {
          if (params.vehicleId) {
            console.log("params", params);
            return this.vehicleService
              .getVehicleById(params.vehicleId)
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
        alert("Update details in Update Status Tab.")
        this.vehicleUpdateForm.setValue(vehicle);
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
