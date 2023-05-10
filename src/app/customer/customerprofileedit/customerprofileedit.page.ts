import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerprofileedit',
  templateUrl: './customerprofileedit.page.html',
  styleUrls: ['./customerprofileedit.page.scss'],
})
export class CustomerprofileeditPage implements OnInit {

  // location: any;
  // image:any
  customerdata:any;
  public customer:any[]=[];
  constructor(private ss: ServiceService, private fb: FormBuilder, private route: ActivatedRoute,private router:Router) {
    
  }
  public profileedit = this.fb.group(
    { 
    customername: [''],
    customernumber: [''],
    // districtname: [''],
    location: [''],
    username: [''],
    password: [''],
    customeremail: [''],
    // image:[''],
    // ownername: ['']


    });

  ngOnInit() {
    // console.log(this.profileId);
    this.ss.getcusprofilebyid(localStorage.getItem("customerid")).subscribe(res => {
      console.log(res);
      if (res) {
        this.profileedit.patchValue(res);
        this.customer[0]=res;
      }
    



    });

  }




  update() {
    if (this.profileedit.value.customername == "" || this.profileedit.value.customeremail == "" || this.profileedit.value.customernumber == "" || this.profileedit.value.location == "" || this.profileedit.value.username == "" || this.profileedit.value.password == ""){
   
      alert("please fill in all fields");
  }
 
        else {
    this.ss.editcusprofile(localStorage.getItem("customerid"), this.profileedit.value).then(() => 
    {
      alert("Updated Successfull");
      this.router.navigate(['/customer/customerprofile']);
    });
  }

}
  }

