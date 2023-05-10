import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerreqview',
  templateUrl: './customerreqview.page.html',
  styleUrls: ['./customerreqview.page.scss'],
})
export class CustomerreqviewPage  {

  public request: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getcusreq(localStorage.getItem("workshopid")).subscribe(res=>
      {
        console.log(res);
        this.request=res;
      }
      );
  }
}
