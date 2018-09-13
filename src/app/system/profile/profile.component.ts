import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/models/user.module';
import {Router} from '@angular/router';

@Component({
  selector: 'mdb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required], this.duplicateLogin.bind(this)),
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.form.controls['login'].setValue(this.user.login);
    this.form.controls['password'].setValue(this.user.password);
    this.form.controls['name'].setValue(this.user.name);
  }

  onSubmit() {
    const {login, password, name} = this.form.value;
    if (this.user.login !== login || this.user.password !== password || this.user.name !== name) {
      const user = new User(login, password, name, 'User', this.user.id);
      this.userService.updateUser(user).subscribe(() => {
        this.router.navigate(['/login']);
      });
    } else {
      this.router.navigate(['/system', 'movies']);
    }
  }

  onOk() {
    this.router.navigate(['/system', 'movies']);
  }

  duplicateLogin(control: FormControl): Promise<any> {
    return new Promise<any>((resolve) => {
      this.userService.getByLogin(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({duplicateLogin: true});
          } else {
            resolve(null);
          }
        });
    });
  }
}
