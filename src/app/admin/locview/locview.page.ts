import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-locview',
  templateUrl: './locview.page.html',
  styleUrls: ['./locview.page.scss'],
})
export class LocviewPage{

  public location: any[]=[];
  public district: any[]=[];

  constructor(private fb:FormBuilder,  private view:ServiceService,private route:ActivatedRoute) { }
  public viewlocation = this.fb.group({
    districtname: [''] 
  })
  ionViewDidEnter() {
    this.view.getdistrict().subscribe(res=>
      {
        console.log(res);
        this.district=res;
      }
      );

      this.view.getlocation().subscribe(res=>
        {
          console.log(res);
          this.location=res;
        }
        );
  


    
  }

  // this.view.locviewbydistrict(this.district).subscribe(res=>
  //   {
  //     console.log(res);
  //     this.location[0]=res;
  //   }
  //   );
  views()
  {
    this.view.locviewbydistrict(this.viewlocation.value.districtname).subscribe((data: any) => {
      this.location = data;
      console.log(data);
    });
  }




}
