import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from '../customers/services/customer.service';
import { first, flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
interface Timeslot {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cust-progress-update',
  templateUrl: './cust-progress-update.component.html',
  styleUrls: ['./cust-progress-update.component.css']
})
export class CustProgressUpdateComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  customerprogressform = this.formBuilder.group({
    id: [''],
    First_name: [''],
    Last_name:[''],
    Gender: ['', [Validators.required]],
    Mobile_number: [''],
    dob: [Date],
    Idproof: ['', [Validators.required]],
    Address: ['', [Validators.required]],
    Occupation: [''],
    doj: [Date, [Validators.required]],
    date: [Date,Validators.required],
    Progress_in_km: ['',Validators.required],
    Trainer:['',[Validators.required]],
    // timeslot:['',[Validators.required]] 
  })

  // timeslots: Timeslot[] = [
  //   {value: '8:00AM-9:00AM',viewValue:'8:00AM-9:00AM'},
  //   {value: '9:00AM-10:00AM', viewValue: '9:00AM-10:00AM'},
  //   {value: '10:00AM-11:00AM', viewValue: '10:00AM-11:00AM'},
  //   {value: '11:00AM-12:00PM', viewValue: '11:00AM-12:00PM'},
  //   {value: '12:00PM-1:00PM', viewValue: '12:00PM-1:00PM'},
  //   {value: '1:00PM-2:00PM', viewValue: '1:00PM-2:00PM'},
  //   {value: '2:00PM-3:00PM', viewValue: '2:00PM-3:00PM'},
  //   {value: '3:00PM-4:00PM', viewValue: '3:00PM-4:00PM'},
  //   {value: '4:00PM-5:00PM', viewValue: '4:00PM-5:00PM'},
  //   {value: '5:00PM-6:00PM', viewValue: '5:00PM-6:00PM'}
    
  // ];

  UpdateCustomer(){
    // console.log(this.customerprogressform.value)
    this.customerService
      .updateCustomer(this.customerprogressform.value.customerId, this.customerprogressform.value)
      .subscribe(
        customer => {
          alert("Customer updated Successfully.")
          this.customerprogressform.reset()
          this.router.navigate(['customers'])

        }
      )
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        first(),
        flatMap(
          params => {
            if (params.customerId) {
              console.log("params", params);
              return this.customerService
                .getCustomerById(params.customerId)
            } else {

              throwError({
                error: 'This will be required to add new customer.'
              })
            }
          }
        )
      )
      .subscribe(
        customer => {
          console.log("customer", customer)
          alert("Enter the progress according to date in the progress tab.")
          this.customerprogressform.patchValue(customer);
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
