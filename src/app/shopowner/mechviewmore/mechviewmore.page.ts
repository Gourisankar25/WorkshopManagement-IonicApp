import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-mechviewmore',
  templateUrl: './mechviewmore.page.html',
  styleUrls: ['./mechviewmore.page.scss'],
})
export class MechviewmorePage  {
mechid:any
public mechmore: any[]=[];


  constructor(private route:ActivatedRoute,private router:Router, private ss:ServiceService) { 
    this.route.paramMap
    .subscribe((params:ParamMap)=>
    {
      this.mechid=params.get('mid');
    });
  }

  ionViewDidEnter() {
    this.ss.getmechbyid(this.mechid).subscribe(res=>
      {
        console.log(res);
        this.mechmore[0]=res;
      }
      );
    }
edit()
{

  this.router.navigate(['/shopowner/mechedit',this.mechid]);
}
    delete()
    {
      if(confirm("you want to delete")){
        this.ss.deletemech(this.mechid).then((error:any)=>
        console.error(error));
        this.router.navigate(['/shopowner/mechview']);

      }
    }
    }
  


