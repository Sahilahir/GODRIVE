import { Injectable } from '@angular/core';
import { Vehicle } from './vehicles';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class VehicleService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    private vehicles: Vehicle[] = [];



    addVehicle(vehicle: any): Observable<Vehicle> {
        return from(
            this.firestore
                .collection('vehicles')
                .add({
                    Vehicle_number: vehicle.Vehicle_number,
                    Vehicle_name: vehicle.Vehicle_name,
                    Insurance: vehicle.Insurance,
                    puc_date: vehicle.puc_date
                })
        )
            .pipe(
                map(
                    documentReference => {
                        vehicle.id = documentReference.id
                        return vehicle
                    }
                )
            )
    }

    updateVehicle(vehicleId: string, vehicle) {
        console.log("in service")
        return from(
            this.firestore
                .collection('vehicles').doc(vehicle.id).update({
                    Insurance: vehicle.Insurance,
                    puc_date: vehicle.puc_date
                })
        )
        // .pipe(
        //     map(
        //         documentReference => {
        //             vehicle.id = documentReference.id
        //             return vehicle
        //         }
        //     )
        // )
    }




    deleteVehicle(vehicleId: string) {
        console.log("in service")
        return this.firestore.collection('vehicles').doc(vehicleId).delete()

    }


    getVehicles(): Observable<Vehicle[]> {

        return this.firestore
            .collection('vehicles')
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
                                    } as Vehicle
                                }
                            )
                    }
                )
            );
    }


    getVehicleById(vehicleId: string): Observable<Vehicle> {



        console.log("in service")
        return this.firestore
            .collection('vehicles')
            .doc(vehicleId)
            .get()
            .pipe(
                map(
                    documentSnapshot => {
                        console.log(documentSnapshot.data())
                        return {
                            id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        } as Vehicle
                    }
                )
            )

    }

}

