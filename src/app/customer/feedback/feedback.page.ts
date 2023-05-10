import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private fb:FormBuilder,private rs:ServiceService,private route:Router) { }

  public signup=this.fb.group({
    feedback:[''], 
    customername:localStorage.getItem("customername"),
    customerid:localStorage.getItem("customerid"),


// workshopname:localStorage.getItem("workshopname"),
// workshopid:localStorage.getItem("workshopid")

  })

  ngOnInit() {
  }
  @Input()
  label!: string;
  @Input() type = 'area'; // set default type be text

  focused: boolean = false;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

}

