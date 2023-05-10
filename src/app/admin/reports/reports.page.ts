import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  gotoshopdetails(){
  this.route.navigate(['/admin/shopdetailsreport']);

  }
  gotos(){
    this.route.navigate(['/admin/mechanicreport']);
  
    }
    gotosh(){
      // this.route.navigate(['/admin/customerdetailsreport']);
    this.route.navigate(['/admin/requestreport']);

    
      }
}
