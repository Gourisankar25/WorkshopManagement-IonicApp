import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  public mechanic: any
  public mechanicav: any
  public profile:any[]=[];


  constructor(private route:Router, private view:ServiceService) { }

  ionViewDidEnter() {

    this.view.getprofilebyid(localStorage.getItem("workshopid")).subscribe(res=>
      {
        console.log(res);
        this.profile[0]=res;
      });

    this.view.mechview( localStorage.getItem("workshopid") ).subscribe(res=>
      {
        console.log(res);
        this.mechanic=res.length;
      }
      );

      this.view.shopmechview( localStorage.getItem("workshopid") ).subscribe(res=>
        {
          console.log(res);
          this.mechanicav=res.length;
        }
        );
  


  }


  goprofile(){
    this.route.navigate(['/shopowner/myprofile']);
  }
  
  goservice(){
    this.route.navigate(['/shopowner/shopserviceview']);
  
  }
  
  gomech(){
    this.route.navigate(['/shopowner/mechview']);
  
  }
  gocustomer(){
    this.route.navigate(['/shopowner/customerreqview']);
  
  }
}
