import { AfterViewChecked, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'material-example-app';

  constructor(private _userService: UserService, private router: Router) { }

  public isLoggedIn;
  auth_token;

  ngOnInit() {
    this.auth_token = sessionStorage.getItem("auth_token");
    if (this.auth_token) {
      console.log("-----------------------------------If you get any Error like 401, Please check the Auth Token Manually -----------------------------------------")
      this.isLoggedIn = "true";
      sessionStorage.setItem("isLoggedIn", "true");
    } else {
      this.router.navigate(['/']);
    }
  }

  // ngAfterViewChecked() {
  //   this.auth_token = sessionStorage.getItem("auth_token");
  //   if (this.auth_token && this.auth_token != "") {
  //     console.log("-----------------------------------If you get any Error like 401, Please check the Auth Token Manually -----------------------------------------")
  //     this.isLoggedIn = "true";
  //     sessionStorage.setItem("isLoggedIn", "true");
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  // }

  logout() {
    console.log("Session Clearing all data like authToken.");
    sessionStorage.clear();
    this.isLoggedIn = undefined;
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    // console.log("Session Clearing all data like authToken.");
    // sessionStorage.clear();
  }
}
