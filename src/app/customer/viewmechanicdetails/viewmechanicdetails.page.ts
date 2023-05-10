import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-viewmechanicdetails',
  templateUrl: './viewmechanicdetails.page.html',
  styleUrls: ['./viewmechanicdetails.page.scss'],
})
export class ViewmechanicdetailsPage  {

  shopid: any;
  mydate:any;
  date:any

  public mechanic: any[]=[];
  constructor(private view:ServiceService,private route1:ActivatedRoute, private datepipe:DatePipe, private route:Router) {
    this.route1.paramMap
    .subscribe((params: ParamMap) => {
      this.shopid = params.get('id');
    });
   }
  ionViewDidEnter() {

    this.view.getmecheditbyid(this.shopid).subscribe(res=>
      {
        console.log(res);
        this.mechanic[0]=res;
        // this.service.patchValue(this.services[0])
      }
      );
  }
}
