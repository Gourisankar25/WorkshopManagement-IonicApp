import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-cusrequestviewmore',
  templateUrl: './cusrequestviewmore.page.html',
  styleUrls: ['./cusrequestviewmore.page.scss'],
})
export class CusrequestviewmorePage  {

  public mechanics: any[]=[];

  public request: any[]=[];
  reqid:any;
  constructor(private ss:ServiceService,private fb:FormBuilder ,private datepipe:DatePipe ,private route:ActivatedRoute,private router:Router) {
    this.route.paramMap
    .subscribe((params:ParamMap)=>
    {
      this.reqid=params.get('id');
    });
   }

   public mechanicform = this.fb.group({
    mechanicname: [''] 
  })

  ionViewDidEnter() {
    this.ss.getservicereqbyid(this.reqid).subscribe(res=>
      {
        console.log(res);
        this.request[0]=res;
      }
      );

      this.ss.getmechanic().subscribe(res=>
        {
          console.log(res);
            this.mechanics=res;
          }
        );



    }
      accept()
      {
        if(confirm("you want to accept?")){
          this.ss.acceptcusreq(this.reqid,this.mechanicform.value.mechanicname,this.request[0]).then();
          this.ss.updatemechstatus(this.mechanicform.value.mechanicname).then();
        }
        this.router.navigate(['/shopowner/customerreqview']);
      }
      reject()
      {
        if(confirm("you want to reject?")){
          this.ss.rejectcusreq(this.reqid).then();
          this.router.navigate(['/shopowner/customerreqview']);

        }
      }


}
