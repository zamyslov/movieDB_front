import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/models/user.module';
import {Router} from '@angular/router';

@Component({
  selector: 'mdb-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required], this.duplicateLogin.bind(this)),
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const {login, password, name} = this.form.value;
    const user = new User(login, password, name, 'User');
    this.userService.createNewUser(user).subscribe(() => {
      this.router.navigate(['/login']);
    });
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
