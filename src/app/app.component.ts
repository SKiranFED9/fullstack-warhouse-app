import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // loading = false;
  getUsername: string;
  currentUser: User;
  title = 'fullstack-warhouse-app';
  users: User[];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // console.log(this.currentUser);
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      // console.log(this.currentUser);
      if (this.currentUser != null) {
        console.log(this.currentUser.firstName + ' ' + this.currentUser.lastName);
        this.getUsername = this.currentUser.firstName + ' ' + this.currentUser.lastName;

      }

    });
    // this.loading = true;
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   // this.loading = false;
    //   this.users = users;
    //   this.getUsername = this.users[0].firstName + ' ' + this.users[0].lastName;
    //   console.log(this.users[0].firstName + ' ' + this.users[0].lastName);
    // });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
