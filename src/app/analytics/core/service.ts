import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class Service {

    constructor(
        private firestore: AngularFirestore
    ) { }

    total_vehicles:number
    total_trainers:number
    total_customers:number


    getVehicles():Observable<number> {

        return this.firestore
            .collection('vehicles')
            .get()
            .pipe(
                map(
                    
                    querySnapshot =>{
                        return querySnapshot.docs.length 
                    }
                )
            );
    }

    getTrainer(): Observable<number> {

        return this.firestore
            .collection('trainers')
            .get()
            .pipe(
                map(
                    querySnaphot => {
                        return querySnaphot.docs.length
                            
                    }
                )
            );
    }

    getCustomer(): Observable<number> {

        return this.firestore
            .collection('customers')
            .get()
            .pipe(
                map(
                    querySnaphot => {
                        return querySnaphot.docs.length
                            
                    }
                )
            );
    }

    getNOinsurance(){
        return this.firestore
        .collection('vehicles', ref => ref.where('Insurance','==','NO'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    console.log(querySnaphot.docs.length)
                    return querySnaphot.docs.length
                }
            )
        )
    }

    getYESinsurance(){
        return this.firestore
        .collection('vehicles', ref => ref.where('Insurance','==','YES'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    console.log(querySnaphot.docs.length)
                    return querySnaphot.docs.length
                }
            )
        )
    }

    getprogress0_20(){
        return this.firestore
        .collection('customers', ref => ref.where('Progress_in_km','<=',20))
        .get()
        .pipe(
            map(
                querySnapshot =>{
                    return querySnapshot.docs.length
                }
            )
        )
    }

    getprogress20_40(){
        return this.firestore
        .collection('customers', ref => ref.where('Progress_in_km','>',20).where('Progress_in_km','<=',40))
        .get()
        .pipe(
            map(
                querySnapshot =>{
                    return querySnapshot.docs.length
                }
            )
        )
    }

    getprogress40_60(){
        return this.firestore
        .collection('customers', ref => ref.where('Progress_in_km','>',40).where('Progress_in_km','<=',60))
        .get()
        .pipe(
            map(
                querySnapshot =>{
                    return querySnapshot.docs.length
                }
            )
        )
    }

    getprogress60_80(){
        return this.firestore
        .collection('customers', ref => ref.where('Progress_in_km','>',60).where('Progress_in_km','<=',80))
        .get()
        .pipe(
            map(
                querySnapshot =>{
                    return querySnapshot.docs.length
                }
            )
        )
    }

    getprogress80_100(){
        return this.firestore
        .collection('customers', ref => ref.where('Progress_in_km','>',80).where('Progress_in_km','<=',100))
        .get()
        .pipe(
            map(
                querySnapshot =>{
                    console.log("123:" , querySnapshot.docs.length)
                    return querySnapshot.docs.length
                }
            )
        )
    }

    getfemales(){
        return this.firestore
        .collection('customers', ref => ref.where('Gender','==','Female'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }

    getmales(){
        return this.firestore
        .collection('customers', ref => ref.where('Gender','==','Male'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }

    getjancustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-01-01').where('doj','<','2019-02-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getfebcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-02-01').where('doj','<','2019-03-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getmarcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-03-01').where('doj','<','2019-04-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getaprcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-04-01').where('doj','<','2019-05-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getmaycustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-05-01').where('doj','<','2019-06-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getjunecustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-06-01').where('doj','<','2019-07-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getjulycustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-07-01').where('doj','<','2019-08-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getaugcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-08-01').where('doj','<','2019-09-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getseptcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-09-01').where('doj','<','2019-10-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getoctcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-10-01').where('doj','<','2019-11-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getnovcustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-11-01').where('doj','<','2019-12-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }
    getdeccustomers(){
        return this.firestore
        .collection('customers', ref => ref.where('doj','>=','2019-12-01').where('doj','<','2020-01-01'))
        .get()
        .pipe(
            map(
                querySnaphot =>{
                    return querySnaphot.docs.length
                }
            )
        )
    }

    getVatsalcust(){
        return this.firestore
        .collection('customers', ref => ref.where('Trainer','==','Vatsal'))
        .get()
        .pipe(
            map(
                querySnapshot => {
                    return querySnapshot.docs.length
                }
            )
        )
    }
    getDhvanicust(){
        return this.firestore
        .collection('customers', ref => ref.where('Trainer','==','Dhvani'))
        .get()
        .pipe(
            map(
                querySnapshot => {
                    return querySnapshot.docs.length
                }
            )
        )
    }
    getRahulcust(){
        return this.firestore
        .collection('customers', ref => ref.where('Trainer','==','Rahul'))
        .get()
        .pipe(
            map(
                querySnapshot => {
                    return querySnapshot.docs.length
                }
            )
        )
    }
    getSahilcust(){
        return this.firestore
        .collection('customers', ref => ref.where('Trainer','==','Sahil'))
        .get()
        .pipe(
            map(
                querySnapshot => {
                    return querySnapshot.docs.length
                }
            )
        )
    }
    getZeelcust(){
        return this.firestore
        .collection('customers', ref => ref.where('Trainer','==','Zeel'))
        .get()
        .pipe(
            map(
                querySnapshot => {
                    return querySnapshot.docs.length
                }
            )
        )
    }

}
