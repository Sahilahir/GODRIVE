import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CustomerService } from '../../customers/services/customer.service';
import { Request, Trainer } from '../../customers/services/customers';
import { TrainerService } from '../../customers/services/trainer.service';
import { Customer } from '../../customers/services/customers';
import { FormBuilder, Validators } from '@angular/forms';
interface Timeslot {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  

  
  constructor(
    public customerservice : CustomerService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService,
    private trainerService: TrainerService
    ) { }
    public request : Request
    public trainers: Trainer[] ;
    public customer : Customer

    timeslots: Timeslot[] = [
      {value: '8:00AM-9:00AM',viewValue:'8:00AM-9:00AM'},
      {value: '9:00AM-10:00AM', viewValue: '9:00AM-10:00AM'},
      {value: '10:00AM-11:00AM', viewValue: '10:00AM-11:00AM'},
      {value: '11:00AM-12:00PM', viewValue: '11:00AM-12:00PM'},
      {value: '12:00PM-1:00PM', viewValue: '12:00PM-1:00PM'},
      {value: '1:00PM-2:00PM', viewValue: '1:00PM-2:00PM'},
      {value: '2:00PM-3:00PM', viewValue: '2:00PM-3:00PM'},
      {value: '3:00PM-4:00PM', viewValue: '3:00PM-4:00PM'},
      {value: '4:00PM-5:00PM', viewValue: '4:00PM-5:00PM'},
      {value: '5:00PM-6:00PM', viewValue: '5:00PM-6:00PM'}
      
    ];

    requestForm = this.formBuilder.group({
      r_id: [''],
      r_first_name: ['', [Validators.required]],
      r_last_name: ['', [Validators.required]],
      r_gender: ['', [Validators.required]],
      r_phone: ['', [Validators.required]],
      r_dob: [Date, [Validators.required]],
      r_idproof: ['', [Validators.required]],
      r_address: ['', [Validators.required]],
      r_occupation: [''],
      r_doj: [Date, [Validators.required]],
      r_trainer:['',[Validators.required]],
      r_timeslot:['',[Validators.required]]
    })

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        first(),
        flatMap(
          params => {
            if (params.requestId) {
              return this.customerservice
                .getRequestById(params.requestId)
            } else {
              throwError({
                error: 'This will be required to add new customer.'
              })
            }
          }
        )
      )
      .subscribe(
        request => { 
          this.request = request
          this.requestForm.patchValue(request);
        },
        error => {
          // console.error(error);
        },
        () => {
          // console.log('completed')
          
        }


        
      )

      this.trainerService.getTrainer()
      .subscribe(
        trainers => {
          this.trainers = trainers;
          // if(trainers.length > 0){
          //   this.customerForm.patchValue({
          //     trainer: trainers[0]['Trainer_name']
          //   });
          //}
          console.log(trainers)
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )
      
  
  }

  acceptRequest(){
    console.log(this.requestForm.value)
    this.customerService
      .r_addCustomer(
        this.requestForm.value
      )
      .subscribe(
        customer => {
          console.log(customer);
          alert("Customer added Successfully.")
          this.requestForm.reset()
        }
      )
  }

  declineRequest(){
    this.activatedRoute.params
    .pipe(
      first(),
      flatMap(
        params => {
          if (params.requestId) {
            console.log("params", params);
            return this.customerService
              .deleteCustomer(params.requestId)
          } else {

            throwError({
              error: 'This will be required to get new Request.'
            })
          }
        }
      )
    )
    .subscribe(
      request => {
        console.log("request :", request)
        alert("Request Successfully declined !")
        this.router.navigate(['customers'])
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
