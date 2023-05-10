import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.page.html',
  styleUrls: ['./myrequest.page.scss'],
})
export class MyrequestPage  {

  
  public request: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getmyreq().subscribe(res=>
      {
        console.log(res);
        this.request=res;
      }
      );
  }
}
