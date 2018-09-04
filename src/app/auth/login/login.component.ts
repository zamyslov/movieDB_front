import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/models/user.module';

@Component({
  selector: 'mdb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User('', '');
  form: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    const formData = this.form.value;
    // this.userService.getUserByLogin(formData.login).subscribe((user: User)=> {
    //   console.log(user);
    // })
    this.userService.logIn(formData.login, formData.password)
      .subscribe(data => {
          console.log(data);
        }, err => {
        }
      );
  }

}
