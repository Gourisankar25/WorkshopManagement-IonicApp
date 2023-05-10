import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopservice',
  templateUrl: './shopservice.page.html',
  styleUrls: ['./shopservice.page.scss'],
})
export class ShopservicePage implements OnInit {
  servicedata:any[]=[];
  submitted = false
  // servicename=true;
  // servicedescription=true;
  // servicecost=true;

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { 
    
  }

  public signup=this.fb.group({
    servicename:['',Validators.required],
    servicedescription:['',Validators.required],
    servicecost:['',[Validators.required,Validators.pattern('[0-9]+(\\.[0-9][0-9]?)?')]],
    workshopid:localStorage.getItem("workshopid")
  })


  ngOnInit() {
  }


  get f(){
    return this.signup.controls
  }

  register()
  {

    this.submitted = true;
    if(this.signup.valid){



    if (this.signup.value.servicename == "" || this.signup.value.servicedescription == "" || this.signup.value.servicecost == ""){
     
      alert("please fill in all fields");
  }
  else{
    this.rs.servicevalidation(this.signup.value.servicename)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.servicedata = res;
        if (this.servicedata.length > 0) {
          alert("Data already Exist!!!"); 
        }
        else {
  
    console.log(this.signup.value);
    this.rs.servicereg(this.signup.value).then(()=>
  {
  alert("Service added");
  this.route.navigate(['./shopowner/shopserviceview']);
  });
  }

});
  }
}
  }
}
