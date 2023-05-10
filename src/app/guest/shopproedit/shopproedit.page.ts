import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopproedit',
  templateUrl: './shopproedit.page.html',
  styleUrls: ['./shopproedit.page.scss'],
})
export class ShopproeditPage implements OnInit {

  profileId: any;
  location: any;
  data:any;
  constructor(private ss: ServiceService, private fb: FormBuilder, private route: ActivatedRoute,private router:Router) {
   
  }
  public profileedit = this.fb.group(
    { username: [''],
      password: [''],
    });

  ngOnInit() {
    // console.log(this.profileId);
    this.ss.getshopprofilebyemail(localStorage.getItem("email")).subscribe(res => {
      console.log(res);
      if (res) {
        this.data=res[0];
        this.profileId=res[0].collection_shopId;
        console.log(this.data);
         this.profileedit.patchValue(this.data);
      }
    
    });
    
    
    this.ss.getlocation().subscribe((data : any) => {
      console.log(data);
      this.location = data;
    });
  }

  
  update() 
  {
  {
    if (this.profileedit.value.username == "" || this.profileedit.value.password == "")
    {
      alert("please fill in all fields");
     }
    
  
    else{
    console.log(this.profileedit.value);
    this.ss.editshoplogin(this.profileId, this.profileedit.value).then(() => 
    {
      alert("Updated Successfull");
      // localStorage.setItem("customerid",this.profileId)
      // localStorage.setItem("customername",this.data.customername)
      // localStorage.setItem("phonenumber",this.data.phonenumber)
      this.router.navigate(['/guest/shopownerlogin']);
    });
  }
  }

}

}
