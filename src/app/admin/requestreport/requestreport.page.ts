import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-requestreport',
  templateUrl: './requestreport.page.html',
  styleUrls: ['./requestreport.page.scss'],
})
export class RequestreportPage implements OnInit {

  public requests: any[]=[];
  public requestdetail: any[]=[];

  public workshop: any[]=[];
  public shopdata: any[]=[];



  constructor(private fb:FormBuilder,  private view:ServiceService,private route:ActivatedRoute) { }

  public viewdate = this.fb.group({
    date: [''] ,
    workshopname: [''],
    status:['']
  })

  ngOnInit() {
    this.view.getworkshops().subscribe(res=>
      {
        console.log(res);
        this.workshop=res;
      }
      );
  }

  views1()
  {
    this.view.getworkshopbyname(this.viewdate.value.workshopname).subscribe((data: any) => {
      this.shopdata = data;
      console.log(data);
    });
  }

  views2()
  {
    this.view.requestforsts(this.viewdate.value.date,this.shopdata[0].collection_shopId,this.viewdate.value.status).subscribe((data: any) => {
      this.requestdetail = data;
      this.requests = data.length;
      console.log(data);
    });
  }
  
}
