import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-mechanicreport',
  templateUrl: './mechanicreport.page.html',
  styleUrls: ['./mechanicreport.page.scss'],
})
export class MechanicreportPage implements OnInit {

  public mech: any[]=[];
  public workshop: any[]=[];


  constructor(private fb:FormBuilder,  private view:ServiceService,private route:ActivatedRoute) { }

  public viewworkshop = this.fb.group({
    workshopname: [''] ,

  })


  ngOnInit() {
    this.view.getworkshops().subscribe(res=>
      {
        console.log(res);
        this.workshop=res;
      }
      );
  }


  views()
  {
    this.view.mechviewbyshop(this.viewworkshop.value.workshopname).subscribe((data: any) => {
      this.mech = data;
      console.log(data);
    });
  }
}
