import { Injectable } from '@angular/core';
import { Trainer } from './trainers';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class TrainerService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    private trainers: Trainer[] = [];



    addTrainer(trainer: any): Observable<Trainer> {
        return from(
            this.firestore
                .collection('trainers')
                .add({
                    Trainer_name: trainer.Trainer_name,
                    Mobile_number: trainer.Mobile_number,
                    dob: trainer.dob,
                    Idproof: trainer.Idproof,
                    Car:trainer.Car
                })
        )
            .pipe(
                map(
                    documentReference => {
                        trainer.id = documentReference.id
                        return trainer
                    }
                )
            )


    }

    deleteTrainer(trainerId: string) {
        console.log("in service")
        return this.firestore.collection('trainers').doc(trainerId).delete()

    }


    getTrainer(): Observable<Trainer[]> {

        return this.firestore
            .collection('trainers')
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
                                    } as Trainer
                                }
                            )
                    }
                )
            );
    }


}