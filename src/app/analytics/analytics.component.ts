import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChartType, ChartOptions, Chart } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { Service } from './core/service';
import { TrainerService } from '../Customer/customers/services/trainer.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  private trainers: import("c:/Users/sahil/Angular_Projects/Go_drive(panama)/src/app/Trainer/trainers/core/trainers").Trainer[];

  constructor(
    private auth:AuthService,
    private router:Router,
    private Service:Service,
    private trainerService: TrainerService
    ) { }

    public total_vehicles:number
    public total_trainers:number
    public total_customers:number
    public no_insurance:number
    public yes_insurance:number
    public progress_0_20:number
    public progress_20_40:number
    public progress_40_60:number
    public progress_60_80:number
    public progress_80_100:number
    public gender_male:number
    public gender_female:number
    public jan_customers:number
    public feb_customers:number
    public mar_customers:number
    public apr_customers:number
    public may_customers:number
    public june_customers:number
    public july_customers:number
    public aug_customers:number
    public sept_customers:number
    public oct_customers:number
    public nov_customers:number
    public dec_customers:number
    public sahil_cust:number
    public rahul_cust: number
    public vatsal_cust:number
    public dhvani_cust : number
    public zeel_cust : number

  chartinit(){
    var densityCanvas = document.getElementById("densityChart") as HTMLCanvasElement;
    var densityData = {
      label: "Number of Customers",
      data: [this.progress_0_20,this.progress_20_40,this.progress_40_60,this.progress_60_80,this.progress_80_100],
      backgroundColor: "turquoise"
    };
    
    var barChart = new Chart(densityCanvas, {
      type: 'bar',
      data: {
        labels: ["0-20 %", "20-40 %", "40-60 %", "60-80 %", "80-100 %"],
        datasets: [densityData],
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
      
    });
  }

  chartinit2(){
    var oilCanvas = document.getElementById("insurance") as HTMLCanvasElement;
    var oilData = {
      labels: [
          "Cars with No Insurance",
          "Cars with Insurance"
      ],
      datasets: [
          {
              data: [this.no_insurance,this.yes_insurance],
              backgroundColor: [
                  "red",
                  "green",
              ]
          }]
  };
  
  var pieChart = new Chart(oilCanvas, {
    type: 'doughnut',
    data: oilData
  });
  }

  chartinit3(){
    var genderCanvas = document.getElementById("gender") as HTMLCanvasElement;
    var genderData = {
      labels: [
          "Number of Female Customers",
          "Number of Male Customers"
      ],
      datasets: [
          {
              data: [this.gender_female,this.gender_male],
              backgroundColor: [
                  "pink",
                  "red",
              ]
          }]
  };
  
  var pieChart = new Chart(genderCanvas, {
    type: 'pie',
    data: genderData
  });
  }

  chartinit4(){
    var monthCanvas = document.getElementById("monthChart") as HTMLCanvasElement;
    var monthData = {
      label: "Number of Customers according to Months in 2019",
      data: [this.jan_customers,this.feb_customers,this.mar_customers,this.apr_customers,this.may_customers,this.june_customers,this.july_customers,this.aug_customers,this.sept_customers,this.oct_customers,this.nov_customers,this.dec_customers],
      backgroundColor: "limegreen"
    };
    
    var barChart = new Chart(monthCanvas, {
      type: 'line',
      data: {
        labels: ["Janurary", "Feburary", "March", "April", "May","June","July","August","September","October","November","December"],
        datasets: [monthData],
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
      
    });
  }

  chartinit5(){
    var trainerCanvas = document.getElementById("trainerchart") as HTMLCanvasElement;
    var trainerData = {
      label: "Number of Customers with Particular Trainer",
      data: [this.vatsal_cust,this.sahil_cust,this.zeel_cust,this.dhvani_cust,this.rahul_cust],
      backgroundColor: "orange"
    };
    
    var barChart = new Chart(trainerCanvas, {
      type: 'bar',
      data: {
        labels: [this.trainers[0]['Trainer_name'], this.trainers[1]['Trainer_name'],this.trainers[2]['Trainer_name'],this.trainers[3]['Trainer_name'],this.trainers[4]['Trainer_name']],
        datasets: [trainerData],
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
      
    });
  }
    

    
  gotoVehicles(){
    console.log("going to vehicles");
    this.router.navigate(['/vehicles']);
  }
  gotoTrainers(){
    console.log("going to trainers");
    this.router.navigate(['/trainers']);
  }
  gotoCustomers(){
    console.log("going to customers");
    this.router.navigate(['/customers']);
  }
  gotoAnalytics(){
    console.log("going to analytics");
    this.router.navigate(['/analytics']);
  }

  logout(){
    this.auth.logout();
    
  }

  ngOnInit() {
    this.Service.getVehicles()
    .subscribe(
      querySnapshot =>{
      this.total_vehicles = querySnapshot 
      console.log(this.total_vehicles)
      },
      error =>{
        console.log(error)

      },
      () => {
        
      }
    )

    this.Service.getTrainer()
    .subscribe(
      querySnapshot =>{
      this.total_trainers = querySnapshot 
      console.log(this.total_trainers)  
      },
      error =>{
        console.log(error)

      },
      () => {
      
      }    
    )

    this.Service.getCustomer()
    .subscribe(
      querySnapshot =>{
        this.total_customers = querySnapshot
        console.log(this.total_customers)
      },
      error=>{
        console.log(error)
      },
      () =>{
        
      }
    )

    this.Service.getNOinsurance()
    .subscribe(
      querySnapshot => {
        this.no_insurance = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }
    )

    this.Service.getYESinsurance()
    .subscribe(
      querySnapshot => {
        this.yes_insurance = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }
    )

    this.Service.getprogress0_20()
    .subscribe(
      querySnapshot =>{
        this.progress_0_20 = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }

    )

    this.Service.getprogress20_40()
    .subscribe(
      querySnapshot =>{
        this.progress_20_40 = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }

    )

    this.Service.getprogress40_60()
    .subscribe(
      querySnapshot =>{
        this.progress_40_60 = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }

    )

    this.Service.getprogress60_80()
    .subscribe(
      querySnapshot =>{
        this.progress_60_80 = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }

    )

    this.Service.getprogress80_100()
    .subscribe(
      querySnapshot =>{
        this.progress_80_100 = querySnapshot
        console.log(querySnapshot)
      },
      error =>{
        console.log(error)
      }

    )

    this.Service.getfemales()
    .subscribe(
      querySnapshot =>{
        this.gender_female = querySnapshot
        console.log(querySnapshot)
      }
    )

    this.Service.getmales()
    .subscribe(
      querySnapshot =>{
        this.gender_male = querySnapshot
        console.log(querySnapshot)
      }
    )

    this.Service.getjancustomers()
    .subscribe(
      querySnapshot =>{
        this.jan_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getfebcustomers()
    .subscribe(
      querySnapshot =>{
        this.feb_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getmarcustomers()
    .subscribe(
      querySnapshot =>{
        this.mar_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getaprcustomers()
    .subscribe(
      querySnapshot =>{
        this.apr_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getmaycustomers()
    .subscribe(
      querySnapshot =>{
        this.may_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getjunecustomers()
    .subscribe(
      querySnapshot =>{
        this.june_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getjulycustomers()
    .subscribe(
      querySnapshot =>{
        this.july_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getaugcustomers()
    .subscribe(
      querySnapshot =>{
        this.aug_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getseptcustomers()
    .subscribe(
      querySnapshot =>{
        this.sept_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getoctcustomers()
    .subscribe(
      querySnapshot =>{
        this.oct_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getnovcustomers()
    .subscribe(
      querySnapshot =>{
        this.nov_customers = querySnapshot
        console.log(querySnapshot)
      }
    )
    this.Service.getdeccustomers()
    .subscribe(
      querySnapshot =>{
        this.dec_customers = querySnapshot
        console.log(querySnapshot)
      }
    )


    this.trainerService.getTrainer()
      .subscribe(
        trainers => {
          this.trainers = trainers;
          if(trainers.length > 0){
            console.log(
               trainers[0]['Trainer_name'],
               trainers[1]['Trainer_name'],
               trainers[2]['Trainer_name'],
               trainers[3]['Trainer_name'],
               trainers[4]['Trainer_name']
            )
          }
          console.log(trainers)
        },
        error => {
          console.log(error)

        },
        () => {

        }
      )

      this.Service.getVatsalcust()
      .subscribe(
        querySnapshot => {
          this.vatsal_cust = querySnapshot
          console.log(querySnapshot)
        }
      )
      this.Service.getDhvanicust()
      .subscribe(
        querySnapshot => {
          this.dhvani_cust = querySnapshot
          console.log(querySnapshot)
        }
      )
      this.Service.getRahulcust()
      .subscribe(
        querySnapshot => {
          this.rahul_cust = querySnapshot
          console.log(querySnapshot)
        }
      )
      this.Service.getSahilcust()
      .subscribe(
        querySnapshot => {
          this.sahil_cust = querySnapshot
          console.log(querySnapshot)
        }
      )
      this.Service.getZeelcust()
      .subscribe(
        querySnapshot => {
          this.zeel_cust = querySnapshot
          console.log(querySnapshot)
        }
      )


  }

  
  
  
  

}
