import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customers/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { first, flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Customer } from './core/customer';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {
  
  public customer : Customer


  constructor(
    public customerservice : CustomerService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        first(),
        flatMap(
          params => {
            if (params.customerId) {
              return this.customerservice
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
          this.customer = customer
        },
        error => {
          console.error(error);
        },
        () => {
          // console.log('completed')
          
        }
      )
      
  }

}
