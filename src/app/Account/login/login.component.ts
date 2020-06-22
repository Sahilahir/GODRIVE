import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginform = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    console.log('form value', this.loginform.value);

    const { email, password } = this.loginform.value;
    this.auth.login(email, password);
    this.loginform.reset();

  }



  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

}
