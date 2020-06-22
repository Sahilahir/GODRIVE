import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { Customer, Trainer, Request } from './services/customers';
import { first, flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TrainerService } from './services/trainer.service';
interface Timeslot {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] 
})

export class CustomersComponent implements OnInit {
  
  public customer : Customer

  public trainers: Trainer[] ;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private trainerService: TrainerService
  ) { }

  public customers: Customer[] = [];
  public requests:Request[]=[];


  customerForm = this.formBuilder.group({
    id: [''],
    First_name: ['', [Validators.required]],
    Last_name: ['', [Validators.required]],
    Gender: ['', [Validators.required]],
    Mobile_number: ['', [Validators.required]],
    dob: [Date, [Validators.required]],
    Idproof: ['', [Validators.required]],
    Address: ['', [Validators.required]],
    Occupation: [''],
    doj: [Date, [Validators.required]],
    trainer:['',[Validators.required]],
    timeslot:['',[Validators.required]]
  })


  
 
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



  addCustomer() {
    console.log(this.customerForm.value)
    this.customerService
      .addCustomer(
        this.customerForm.value
      )
      .subscribe(
        customer => {
          console.log(customer);
          alert("Customer added Successfully.")
          this.customerForm.reset()
        }
      )
  }

  
  
  ngOnInit() {
    this.customerService.getCustomer()
      .subscribe(
        customers => {
          this.customers = customers;
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )
      this.trainerService.getTrainer()
      .subscribe(
        trainers => {
          this.trainers = trainers;
          if(trainers.length > 0){
            this.customerForm.patchValue({
              trainer: trainers[0]['Trainer_name']
            });
          }
          console.log(trainers)
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )

      this.customerService.getRequests()
      .subscribe(
        requests => {
          this.requests = requests;
          console.log(requests)
        },
        error => {
          console.log(error)

        },
        () => {
          
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


