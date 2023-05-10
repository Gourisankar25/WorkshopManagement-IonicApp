import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-workshopview',
  templateUrl: './workshopview.page.html',
  styleUrls: ['./workshopview.page.scss'],
})
export class WorkshopviewPage {

  public workshop: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getworkshop().subscribe(res=>
      {
        console.log(res);
        this.workshop=res;
      }
      );
  }

}
