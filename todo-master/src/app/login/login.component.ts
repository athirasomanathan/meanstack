import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'service/commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private commonService:CommonserviceService) { }//inject service

  ngOnInit() {
  }
  view(){
    this.commonService.showErr();
    this.router.navigate(['todo']);
    //this.router.navigateByUrl('/todo');
  }

}
