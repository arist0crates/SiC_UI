import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }
  checked: boolean;
  ngOnInit() {
    this.checked = false;
  }

  onSignup(form: NgForm) {
    if (this.checked = true) {
      const email = form.value.email;
      const password = form.value.password;
      const name = form.value.name;
      this.authService.signupUser(email, password, name);
    } else { console.log("erro") }



  }

}
