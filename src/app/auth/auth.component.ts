import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // @ts-ignore
  authStatus : boolean;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        localStorage.setItem('isLogged', 'true');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['devices']);
      }
    )
  }

  onLogOut() {
    this.authService.logOut();
    this.authStatus = this.authService.isAuth;
    console.log("Disconnected")
    localStorage.setItem("isLogged", "false")
  }

  getLoggedStatus() {
    return this.authService.loggedStatus();
  }



}
