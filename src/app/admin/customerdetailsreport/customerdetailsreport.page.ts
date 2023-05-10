import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerdetailsreport',
  templateUrl: './customerdetailsreport.page.html',
  styleUrls: ['./customerdetailsreport.page.scss'],
})
export class CustomerdetailsreportPage  {

  public profile:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.customerdetailsreport().subscribe(res=>
      {
        console.log(res);
        this.profile=res;
      });
  }

}
