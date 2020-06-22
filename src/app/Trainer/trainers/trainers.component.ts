import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TrainerService } from './core/trainer.service';
import { Trainer,Vehicle } from './core/trainers';
import { first, flatMap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { VehicleService } from "src/app/Vehicles/vehicles-component/core/vehicle.service";


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
 
  public cars: Vehicle[] ;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private trainerService: TrainerService,
    private activatedRoute: ActivatedRoute,
    private vehicleservice:VehicleService
  ) { }

  trainers: Trainer[] = [];

  trainerForm = this.formBuilder.group({
    id: [''],
    Trainer_name: ['', [Validators.required]],
    Mobile_number: ['', [Validators.required]],
    dob: [Date, [Validators.required]],
    Idproof: ['', [Validators.required]],
    Car:['',[Validators.required]]
  })

  addTrainer() {
    console.log(this.trainerForm.value)
    this.trainerService
      .addTrainer(
        this.trainerForm.value
      )
      .subscribe(
        trainer => {
          console.log(trainer);
          alert("Trainer added Successfully.")
          this.trainerForm.reset()
        }
      )
  }


  ngOnInit() {
    this.trainerService.getTrainer()
      .subscribe(
        trainers => {
          this.trainers = trainers;
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )
    
      this.vehicleservice.getVehicles()
      .subscribe(
        cars => {
          this.cars = cars;
          if(cars.length > 0){
            this.trainerForm.patchValue({
              Car: cars[0]['Vehicle_name']
            });
          }
          console.log(cars)
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )

  }

  deleteTrainer() {
    console.log("in delete fun")
    this.activatedRoute.params
      .pipe(
        first(),
        flatMap(
          params => {
            if (params.trainerId) {
              console.log("params", params);
              return this.trainerService
                .deleteTrainer(params.trainerId)
            } else {

              throwError({
                error: 'This will be required to add new vehicle.'
              })
            }
          }
        )
      )
      .subscribe(
        trainer => {
          console.log("trainer", trainer)
          alert("Trainer deleted successfully")
          this.router.navigate(['trainers'])
        },
        error => {
          console.error(error);
        },
        () => {
          console.log('completed')
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

}



