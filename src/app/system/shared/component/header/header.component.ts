import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user.module';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/service/auth.service';

@Component({
  selector: 'mdb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
