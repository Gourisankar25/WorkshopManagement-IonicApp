import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage  {

  public workshop: any[]=[];
  public district: any[]=[];
  public location: any[]=[];

  constructor(private fb:FormBuilder,  private view:ServiceService,private route:ActivatedRoute) { }

  public viewlocation = this.fb.group({
    districtname: [''] ,
    locationname: [''] 

  })


  
  ionViewDidEnter() {


    this.view.getworkshops().subscribe(res=>
      {
        console.log(res);
        this.workshop=res;
      }
      );

      this.view.getdistrict().subscribe(res=>
        {
          console.log(res);
          this.district=res;
        }
        );


        this.view.getlocationbydistrict(this.viewlocation.value.districtname).subscribe(res=>
          {
            console.log(res);
            this.location=res;
          }
          );


  }

  views()
  {
    this.view.shopviewbydistrict(this.viewlocation.value.districtname).subscribe((data: any) => {
      this.location = data;
      this.workshop = data;
      console.log(data);
    });
  }

  views1()
  {

    this.view.shopviewbylocation(this.viewlocation.value.locationname).subscribe((data: any) => {
      // this.location = data;
      this.workshop = data;
      console.log(data);
    });
  }



   
  }






