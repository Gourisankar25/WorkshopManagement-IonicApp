import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-locreg',
  templateUrl: './locreg.page.html',
  styleUrls: ['./locreg.page.scss'],
})
export class LocregPage implements OnInit {
  public district: any[]=[];

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { }
  public signup=this.fb.group({
    locationname:[''],
    districtname:['']
  })

  ngOnInit() {
    this.rs.getdistrict().subscribe(res=>
      {
        console.log(res);
        this.district=res;
      }
      );
  }

  register(){
    if ( this.signup.value.locationname == ""){
   
      alert("please fill in all fields");
  
    }
    else{
      {
        console.log(this.signup.value);
        this.rs.locreg(this.signup.value).then(()=>
      {
      alert("Location registration completed");
      this.route.navigate(['./admin/locview']);
      });
      }
    }
    }
   
  

}
