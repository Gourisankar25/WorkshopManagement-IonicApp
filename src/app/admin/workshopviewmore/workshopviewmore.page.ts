import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-workshopviewmore',
  templateUrl: './workshopviewmore.page.html',
  styleUrls: ['./workshopviewmore.page.scss'],
})
export class WorkshopviewmorePage  {

  public workshopmore: any[]=[];
  shopid:any;
  constructor(private ss:ServiceService, private datepipe:DatePipe ,private route:ActivatedRoute,private router:Router) {
    this.route.paramMap
    .subscribe((params:ParamMap)=>
    {
      this.shopid=params.get('id');
    });
   }

  ionViewDidEnter() {
    this.ss.getworkshopbyid(this.shopid).subscribe(res=>
      {
        console.log(res);
        this.workshopmore[0]=res;
      }
      );
    }
      accept(shopid: String)
      {
        if(confirm("you want to accept?")){
          this.ss.acceptrequest(this.shopid).then((error:any)=>
          
          console.error(error));
          this.router.navigate(['/admin/workshopview']);

        }
      }
      reject(shopid: String)
      {
        if(confirm("you want to reject?")){
          this.ss.rejectrequest(this.shopid).then((error:any)=>
          console.error(error));
          this.router.navigate(['/admin/workshopview']);

        }
      }

  }

 


