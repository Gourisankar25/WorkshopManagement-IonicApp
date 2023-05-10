import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
admindata:any
  constructor(private router: Router,private fb:FormBuilder ,private ss: ServiceService, route:ActivatedRoute) { }

  ngOnInit() {
  }

public adminlogin=this.fb.group({
  username:[''],
  password:['']
})

login(){
  if (this.adminlogin.value.username == "" || this.adminlogin.value.password == ""){
   
    alert("please enter username and password");


}
else{
  console.log(this.adminlogin.value);
  this.ss.adminlogin(this.adminlogin.value.username, this.adminlogin.value.password)
  .pipe(take(1))
    .subscribe(res => {
      console.log(res);
      this.admindata = res;
      if (this.admindata.length > 0) {
        // alert("login successfully");
        this.router.navigate(['/admin/index']);
      }
      else {
        alert("login failed");
        this.router.navigate(['/guest/adminlogin']);
      }
  
    });
}
 



}
}



