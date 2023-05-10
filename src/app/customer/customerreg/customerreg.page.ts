import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerreg',
  templateUrl: './customerreg.page.html',
  styleUrls: ['./customerreg.page.scss'],
})
export class CustomerregPage implements OnInit {

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { }
  public signup=this.fb.group({
    customername:[''],
    customeremail:[''],
    customernumber:[''],
    location:[''],
    username:[''],
    password:[''],

// workshopname:localStorage.getItem("workshopname"),
// workshopid:localStorage.getItem("workshopid")

  })

  ngOnInit() {
  }

  register()
  {
    console.log(this.signup.value);
    this.rs.customerreg(this.signup.value).then(()=>
  {
  alert("Customer registration completed");
  this.route.navigate(['./customer/index']);
  });
  }

}
