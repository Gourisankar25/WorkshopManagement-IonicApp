import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-mechreg',
  templateUrl: './mechreg.page.html',
  styleUrls: ['./mechreg.page.scss'],
})
export class MechregPage implements OnInit {
mechdata:any
submitted=false

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { }
  public signup=this.fb.group({
    mechanicname:['',Validators.required],
    location:['',Validators.required],
    mechanicemail:['',[Validators.email,Validators.required]],
    mechanicnumber:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
workshopname:localStorage.getItem("workshopname"),
workshopid:localStorage.getItem("workshopid"),
status:"Active"

  })

  ngOnInit() {
  }
  get f(){
    return this.signup.controls
  }
  register(){
    this.submitted = true;
    if(this.signup.valid){
  if (this.signup.value.mechanicname == "" || this.signup.value.mechanicemail == "" || this.signup.value.mechanicnumber == "" || this.signup.value.location == ""){
   
    alert("please fill in all fields");


}
else{
  this.rs.mechanicvalidation(this.signup.value.mechanicemail,this.signup.value.mechanicnumber)
  .pipe(take(1))
    .subscribe(res => {
      console.log(res);
      this.mechdata
      = res;
      if (this.mechdata.length > 0) {
        alert("Data already Exist!!!"); 
      }
      else {
  
    console.log(this.signup.value);
    this.rs.mechsignup(this.signup.value).then(()=>
  {
  alert("Mechanic registration completed");
  this.route.navigate(['./shopowner/mechview']);
  });


}
}
)};
}
  }
}