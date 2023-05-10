import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopserviceview',
  templateUrl: './shopserviceview.page.html',
  styleUrls: ['./shopserviceview.page.scss'],
})
export class ShopserviceviewPage {
  // shopid: any;

  public services: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { 
  }

  ionViewDidEnter() {
    this.view.serviceview(localStorage.getItem("workshopid")).subscribe(res=>
      {
        console.log(res);
        this.services=res;
      }
      );
  }
  delete(id: string)
  {
    if(confirm("you want to delete")){
      this.view.deleteservice(id).then((error:any)=>
      console.error(error));
    }
  }

}
