import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User: Observable<firebase.User>
  
    
  login(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then(value=>{
      console.log('worked and welcome');
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      console.log('',err.message);
      
      this.router.navigate(['/login']);
      alert("Username or Password is Incorrect.")
    })

  }



  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => alert("Password reset link is sent to this E-MAIL address."))
      .catch((error) => alert(" There is no user corresponding to this E-MAIL address."))
  }


  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
  
  

  constructor(private afAuth:AngularFireAuth,private router:Router) { }
}
