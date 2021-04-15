import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginUser() {
    console.log(this.loginForm.value.email + "," + this.loginForm.value.password);
    this._userService.getAuthTokenByCredentials(this.loginForm).subscribe(
      data => {
        let auth_token = data.data;
        console.log("Login Success with token: " + auth_token);
        sessionStorage.setItem("auth_token", auth_token);
        sessionStorage.setItem("tenant_name", 'test1');
        sessionStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['/callLog']);
      },
      error => {
        console.error(error);
      }
    )
  }
}
