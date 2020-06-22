import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Trainer } from 'src/app/Trainer/trainers/core/trainers';
@Injectable({ providedIn: 'root' })
export class TrainerService {

    constructor(
        private firestore: AngularFirestore
    ) { }
    
    getTrainer() {
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