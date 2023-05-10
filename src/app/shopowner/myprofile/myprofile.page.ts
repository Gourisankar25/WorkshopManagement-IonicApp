import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage {

  public profile:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getprofilebyid(localStorage.getItem("workshopid")).subscribe(res=>
      {
        console.log(res);
        this.profile[0]=res;
      });
  }
  

 
}
