import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-rejectedrequests',
  templateUrl: './rejectedrequests.page.html',
  styleUrls: ['./rejectedrequests.page.scss'],
})
export class RejectedrequestsPage  {

  public request: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getmyrejectedreq().subscribe(res=>
      {
        console.log(res);
        this.request=res;
      }
      );
  }

}
