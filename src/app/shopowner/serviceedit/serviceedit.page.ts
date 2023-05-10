import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-serviceedit',
  templateUrl: './serviceedit.page.html',
  styleUrls: ['./serviceedit.page.scss'],
})
export class ServiceeditPage implements OnInit {

  serviceid: any;
  router: any;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.serviceid = params.get('id');
    });
  }
  public serviceedit=this.fb.group({
    servicename:[''],
    servicedescription:[''],
    servicecost:['']
  })

  ngOnInit() {
    console.log(this.serviceid);
    this.vs.getservicebyid(this.serviceid).subscribe(res=> {
      if (res) {
        this.serviceedit.patchValue(res);
      }
    });
  }
  update() {
    this.vs.editservice(this.serviceid, this.serviceedit.value).then(() => {
     alert("Details updated");
     this.router1.navigate(['./shopowner/shopserviceview']);

   });
  }

}
