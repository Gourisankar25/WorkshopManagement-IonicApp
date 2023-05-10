import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.page.html',
  styleUrls: ['./customerprofile.page.scss'],
})
export class CustomerprofilePage  {

  public profile:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getcusprofilebyid(localStorage.getItem("customerid")).subscribe(res=>
      {
        console.log(res);
        this.profile[0]=res;
      });
  }

}
