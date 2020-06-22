import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  gotoVehicles() {
    console.log("going to vehicles");
    this.router.navigate(['/vehicles']);
  }
  gotoTrainers() {
    console.log("going to trainers");
    this.router.navigate(['/trainers']);
  }
  gotoCustomers() {
    console.log("going to customers");
    this.router.navigate(['/customers']);
  }
  gotoAnalytics() {
    console.log("going to analytics");
    this.router.navigate(['/analytics']);
  }

  logout() {
    this.auth.logout();

  }

}
