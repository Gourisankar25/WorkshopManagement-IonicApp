import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customersignin',
  templateUrl: './customersignin.page.html',
  styleUrls: ['./customersignin.page.scss'],
})
export class CustomersigninPage implements OnInit {

  shopdata:any
  constructor(private router: Router,private fb:FormBuilder ,private ss: ServiceService, route:ActivatedRoute) { }

  ngOnInit() {
  }

  public customerlogin=this.fb.group({
    username:[''],
    password:['']
  })
  
  login(){
    if (this.customerlogin.value.username == "" || this.customerlogin.value.password == ""){
   
      alert("please enter username and password");
  
  
  }
  else{
    console.log(this.customerlogin.value);
    this.ss.customerlogin(this.customerlogin.value.username, this.customerlogin.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.shopdata = res;
        // if(this.shopdata[0].status == "Request Accepted")
        // {
           if (this.shopdata.length > 0) {
            // alert("login successfully");
              // alert(this.shopdata[0].workshopname);
            localStorage.setItem('customername',this.shopdata[0].customername);
            localStorage.setItem('customerid',res[0].collection_customerId);       //error comes in service page

            this.router.navigate(['/customer/index']);
            }
        else {
          alert("login failed");
          this.router.navigate(['/guest/customersignin']);
            }
    });
  }
  
     




  }

  // gotoLoginpage(){
  //   this.router.navigate(['/guest/customersignin']);
  // }

  registerUser(){ 
    this.router.navigate(['/guest/customersignup']);
  }
  forgotUser(){
    this.router.navigate(['/guest/cusforgot']);

  }
}

