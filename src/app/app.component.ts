import { Component } from '@angular/core';
import 'hammerjs';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  token : string;
  constructor( private route: ActivatedRoute,private authService: AuthService, private location: Location) { }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBP_6-SpP9_GHLcdQkRwb_5BolijUOF6Ao",
      authDomain: "sicproj-65158.firebaseapp.com",
      databaseURL: "https://sicproj-65158.firebaseio.com",
      projectId: "sicproj-65158",
      storageBucket: "sicproj-65158.appspot.com",
      messagingSenderId: "770804346023"
    });
    this.token=null;
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.token=this.authService.getToken();
   
   
  }
  title = 'SicBricolage ';
  logOut(){
    this.authService.logout();
    this.token=this.authService.getToken();

  }
}
