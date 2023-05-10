import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopcountreport',
  templateUrl: './shopcountreport.page.html',
  styleUrls: ['./shopcountreport.page.scss'],
})
export class ShopcountreportPage  {

  count:any;
  count2:any;

  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getworkshopreport().subscribe(res=>
      {
        console.log(res);
        this.count=res.length;
      }
      );


      this.view.shopacceptedcount().subscribe(res=>
        {
          console.log(res);
          this.count2=res.length;
        }
        );
  }
}
