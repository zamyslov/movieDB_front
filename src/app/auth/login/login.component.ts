import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/models/user.module';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'mdb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User('', '', '', '');
  message: Message;
  form: FormGroup;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
  ) {
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 2000);
  }

  ngOnInit() {
    this.message = new Message('danger', '');
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
    this.userService.logIn(formData.login)
      .subscribe((user: User) => {
          console.log(this.message);
          if (user) {
            if (user.password === formData.password) {
              this.message.text = '';
              window.localStorage.setItem('user', JSON.stringify(user));
              this.authService.login();
              this.router.navigate(['/system', 'movies']);
            } else {
              this.showMessage({text: 'Неправильный пароль!', type: 'danger'});
            }
          } else {
            this.showMessage({text: 'Такого пользователя не существует!', type: 'danger'});
          }
        }
      );
  }

}
