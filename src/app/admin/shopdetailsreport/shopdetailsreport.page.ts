import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopdetailsreport',
  templateUrl: './shopdetailsreport.page.html',
  styleUrls: ['./shopdetailsreport.page.scss'],
})
export class ShopdetailsreportPage  {

  public workshop: any[]=[];
  public workshops: any
  public requestlength: any


  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getworkshopreport().subscribe(res=>
      {
        console.log(res);
        this.workshops=res.length;
      }
      );

      this.view.shopacceptedcount().subscribe(res=>
        {
          console.log(res);
          this.requestlength=res.length;
        }
        );

      

    this.view.getworkshopreport().subscribe(res=>
      {
        console.log(res);
        this.workshop=res;
      }
      );
  }

}
