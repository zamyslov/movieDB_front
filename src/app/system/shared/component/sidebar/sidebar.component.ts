import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user.module';

@Component({
  selector: 'mdb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: User;
  isAdmin: boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if (this.user) {
      if (this.user.role === 'Admin') {
        this.isAdmin = true;
      }
    }
  }

}
