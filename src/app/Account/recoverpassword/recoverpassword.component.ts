import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  Recover = this.fb.group({
    email: ['', [Validators.email, Validators.required]],

  })

  resetPassword() {
    const { email } = this.Recover.value;
    this.auth.resetPassword(email);
    this.Recover.reset();
  }



  ngOnInit() {
  }

}
