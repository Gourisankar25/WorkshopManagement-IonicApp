import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopownerlogin',
  templateUrl: './shopownerlogin.page.html',
  styleUrls: ['./shopownerlogin.page.scss'],
})
export class ShopownerloginPage implements OnInit {

  shopdata:any
  constructor(private router: Router,private fb:FormBuilder ,private ss: ServiceService, route:ActivatedRoute) { }

  ngOnInit() {
  }

  public workshoplogin=this.fb.group({
    username:[''],
    password:['']
  })
  
  login(){
    if (this.workshoplogin.value.username == "" || this.workshoplogin.value.password == ""){
   
      alert("please enter username and password");
  
  
  }
  else{
    console.log(this.workshoplogin.value);
    this.ss.workshoplogin(this.workshoplogin.value.username, this.workshoplogin.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.shopdata = res;
        if(res.length>0){
        if(this.shopdata[0].status == "Request Accepted")
        {
          
           if (this.shopdata.length > 0) {
            // alert("login successfully");
              // alert(this.shopdata[0].workshopname);
            localStorage.setItem('workshopname',this.shopdata[0].workshopname);
            localStorage.setItem('workshopid',res[0].collection_shopId);

            this.router.navigate(['/shopowner/index']);
            }
          }

        else {
          alert("login failed");
          this.router.navigate(['/guest/index']);
            }
    }

    else{
      alert("Sorry, your registration request is not yet accepted!");
      this.router.navigate(['/guest/shopownerlogin']);

    }
  
      });
  }

    
  



  }
  registerUser(){ 
    this.router.navigate(['/guest/shopownerreg']);
  }

  forgotUser(){
    this.router.navigate(['/guest/shopforgot']);

  }
}
