import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  requestlength: any
  sessionlength: any
  public prerequestlenght: any
  public workshop: any


  constructor(private view: ServiceService, private route:Router) { }

  ngOnInit() {

    this.view.admingetworkshop().subscribe(res=>
      {
        console.log(res);
        this.workshop=res.length;
      }
      );
    // localStorage.setItem('sessionlength','0');
    this.view.getworkshop().pipe(take(1)).subscribe(res => {
      console.log(res);
      this.requestlength = res.length;
      this.prerequestlenght = localStorage.getItem('sessionlength');

if(this.prerequestlenght){
      if (this.requestlength > this.prerequestlenght) {
        this.PlaySound();
      }

      else {
        localStorage.setItem('sessionlength', this.requestlength);
      }
    }
    });
  
  }




  PlaySound() {

    let audio = new Audio;
    audio.src = "../../../assets/notification.wav";
    audio.load();
    audio.play();
    alert("New Shop Request");
    localStorage.setItem('sessionlength', this.requestlength)
  }







goadmin(){
  this.route.navigate(['/admin/locview']);
}

goshop(){
  this.route.navigate(['/admin/workshopview']);

}

gocustomer(){
  this.route.navigate(['/admin/reports']);

}






}


