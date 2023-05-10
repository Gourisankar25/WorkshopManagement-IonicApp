import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-mechview',
  templateUrl: './mechview.page.html',
  styleUrls: ['./mechview.page.scss'],
})
export class MechviewPage  {

  public mechanic: any[]=[];
  constructor(private view:ServiceService,private ds:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.mechview( localStorage.getItem("workshopid") ).subscribe(res=>
      {
        console.log(res);
        this.mechanic=res;
      }
      );
  }
  

}
