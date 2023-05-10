import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.page.html',
  styleUrls: ['./customersignup.page.scss'],
})
export class CustomersignupPage implements OnInit {
  submitted=false

  customerdata:any
  phono:any;
  // signup!:FormGroup
  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { }
  
  public signup=this.fb.group({
    customername:['',Validators.required],
    customeremail:['',[Validators.email,Validators.required]],
    customernumber:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    location:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],

// workshopname:localStorage.getItem("workshopname"),
// workshopid:localStorage.getItem("workshopid")

  })

  ngOnInit() {
    
  }

  get f(){
    return this.signup.controls
  }

  register(){
    this.submitted = true;
    if(this.signup.valid){
  if (this.signup.value.customername == "" ||
   this.signup.value.customeremail == "" ||
    this.signup.value.customernumber == "" ||
     this.signup.value.location == "" ||
      this.signup.value.username == "" || 
      this.signup.value.password == ""){
   
    alert("please fill in all fields");
}
else{
  this.rs.customervalidation(this.signup.value.customeremail,this.signup.value.customernumber)
  .pipe(take(1))
    .subscribe(res => {
      console.log(res);
      this.customerdata
      = res;
      if (this.customerdata.length > 0) {
        alert("Phone number or Email already Exist!!!"); 
      }
      else {
        console.log(this.signup.value);
        this.rs.customerreg(this.signup.value).then(()=>
      {
      alert("Customer registration completed");
      this.route.navigate(['/guest/index']);
      }); 
      }
}
)};
}

  }
}
