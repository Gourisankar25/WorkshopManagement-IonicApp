import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-acceptedrequests',
  templateUrl: './acceptedrequests.page.html',
  styleUrls: ['./acceptedrequests.page.scss'],
})
export class AcceptedrequestsPage  {

  public request: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ionViewDidEnter() {
    this.view.getmyacceptedrequest().subscribe(res=>
      {
        console.log(res);
        this.request=res;

      }
      );
  }
}
