import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myprofileedit',
  templateUrl: './myprofileedit.page.html',
  styleUrls: ['./myprofileedit.page.scss'],
})
export class MyprofileeditPage implements OnInit {

  public district: any[]=[];

  public location: any[]=[];
shopdata:any;

  image:any
  public workshop:any[]=[];
  constructor(private ss: ServiceService, private fb: FormBuilder, private route: ActivatedRoute,private router:Router, private storage:AngularFireStorage) {
    
  }
  public profileedit = this.fb.group(
    { 
      workshopname: [''],
    number: [''],
    districtname: [''],
    locationname: [''],
    username: [''],
    password: [''],
    email: [''],
    image:[''],
    ownername: [''],
    shopstatus:""


    });

  ngOnInit() {
    // console.log(this.profileId);
    this.ss.getprofilebyid(localStorage.getItem("workshopid")).subscribe(res => {
      console.log(res);
      if (res) {
        this.profileedit.patchValue(res);
        this.workshop[0]=res;
      }
    



    });

    this.ss.getdistrict().subscribe(res=>
      {
        console.log(res);
        this.district=res;
      }
      );

      this.ss.getlocation().subscribe(res=>
        {
          console.log(res);
          this.location=res;
        }
        );
    

   
    
    // this.ss.getlocation().subscribe((data : any) => {
    //   console.log(data);
    //   this.location = data;
    // });
  }
  upload(file : any) {
    const path = `workshop/${Date.now()}_${file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    const task = this.storage.upload(path, file);
    // Progress monitoring
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        const url = await res.ref.getDownloadURL();
        resolve(url);
      })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_);
        });
    });
  }
  async handlefile(event: any) {
    const files = event?.target?.files;
    if (files?.length) {
      this.image = await this.upload(files[0]);
      console.log(this.image);
      this.profileedit.controls.image.setValue(this.image);
      alert("File Uploaded");
    }
  }

  
  update() {
    if (this.profileedit.value.workshopname == "" || this.profileedit.value.ownername == "" || this.profileedit.value.email == "" || this.profileedit.value.number == "" || this.profileedit.value.username == "" || this.profileedit.value.password == ""  ||  this.profileedit.value.image == ""  || this.profileedit.value.locationname == ""){
   
      alert("please fill in all fields");

    }
    // else{
    //   this.ss.shopvalidation(this.profileedit.value.workshopname,this.profileedit.value.email,this.profileedit.value.number,this.profileedit.value.ownername)
    //   .pipe(take(1))
    //     .subscribe(res => {
    //       console.log(res);
    //       this.shopdata = res;
    //       if (this.shopdata.length > 0) {
    //         alert("Data already Exist!!!"); 
    //       }
          else {

    console.log(this.profileedit.value);
    this.ss.editprofile(localStorage.getItem("workshopid"), this.profileedit.value).then(() => 
    {
      alert("Updated Successfull");
      this.router.navigate(['/shopowner/myprofile']);
    });
  }
}



view()
{
  this.ss.locviewbydistrict(this.profileedit.value.districtname).subscribe((data: any) => {
    this.location = data;
    console.log(data);
  });
}






}
