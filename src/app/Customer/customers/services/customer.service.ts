import { Injectable } from '@angular/core';
import { Customer } from './customers';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { format } from 'url';
import { Request } from './customers';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(
        private firestore: AngularFirestore
    ) { }

    private customers: Customer[] = [];



    addCustomer(customer: any): Observable<Customer> {
        this.firestore
                .collection('onboard_customers')
                .add({
                    First_name: customer.First_name,
                    Last_name: customer.Last_name,
                    Gender: customer.Gender,
                    Mobile_number: customer.Mobile_number,
                    dob: customer.dob,
                    Idproof: customer.Idproof,
                    Address: customer.Address,
                    Occupation: customer.Occupation,
                    doj: customer.doj,
                    date: customer.doj,
                    Progress_in_km: 0,
                    Trainer:customer.trainer,
                    Time:customer.timeslot 
                })
        return from(
            this.firestore
                .collection('customers')
                .add({
                    First_name: customer.First_name,
                    Last_name: customer.Last_name,
                    Gender: customer.Gender,
                    Mobile_number: customer.Mobile_number,
                    dob: customer.dob,
                    Idproof: customer.Idproof,
                    Address: customer.Address,
                    Occupation: customer.Occupation,
                    doj: customer.doj,
                    date: customer.doj,
                    Progress_in_km: 0,
                    Trainer:customer.trainer,
                    Time:customer.timeslot
                })
            
        )
            .pipe(
                map(
                    documentReference => {
                        customer.id = documentReference.id
                        return customer
                    }
                )
            )
    


    }


    getCustomerById(customerId: string): Observable<Customer>{
        
        //console.log("in service")
        return this.firestore
            .collection('customers')
            .doc(customerId)
            .get()
            .pipe(
                map(
                    documentSnapshot => {
                        //console.log(documentSnapshot.data())
                        return {
                            id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        } as Customer
                    }
                )
            )

    }


    getCustomer(): Observable<Customer[]> {

        return this.firestore
            .collection('customers')
            .get()
            .pipe(
                map(
                    querySnaphot => {
                        return querySnaphot.docs
                            .map(
                                doc => {
                                    return {
                                        id: doc.id,
                                        ...doc.data()
                                    } as Customer
                                }
                            )
                    }
                )
            );
    }

    updateCustomer(customerId: string , customer){
        console.log("in service")
        return from(
            this.firestore
                .collection('customers').doc(customer.id).update({
                    date: customer.date,
                    Progress_in_km: customer.Progress_in_km,
                    
                })
        )
    }

    

    getRequests(): Observable<Request[]> {

        console.log("in service request")
        return this.firestore
            .collection('requests')
            .get()
            .pipe(
                map(
                    querySnaphot => {
                        return querySnaphot.docs
                            .map(
                                doc => {
                                    return{
                                        r_id: doc.id,
                                        ...doc.data()
                                    }as Request
                                }
                            
                            )
                    }
                )
            );
    }

    getRequestById(requestId: string): Observable<Request>{
        
        //console.log("in service")
        return this.firestore
            .collection('requests')
            .doc(requestId)
            .get()
            .pipe(
                map(
                    documentSnapshot => {
                        //console.log(documentSnapshot.data())
                        return {
                            r_id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        } as Request
                    }
                )
            )

    }


    r_addCustomer(request:any){
        return from(
            this.firestore
                .collection('customers')
                .add({
                    First_name: request.r_first_name,
                    Last_name: request.r_last_name,
                    Gender:request.r_gender,
                    Mobile_number: request.r_phone,
                    dob: request.r_dob,
                    Idproof: request.r_idproof,
                    Address: request.r_address,
                    Occupation: request.r_occupation,
                    doj: request.r_doj,
                    date: request.r_doj,
                    Progress_in_km: 0,
                    Trainer:request.r_trainer,
                    Time:request.r_timeslot
                })
        )
    }

    deleteCustomer(requestId: string){
        return this.firestore
        .collection('requests').doc(requestId).delete()
    }
}