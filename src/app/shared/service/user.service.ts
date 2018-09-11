import {BaseApi} from '../base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {User} from '../models/user.module';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends BaseApi {

  constructor(http: HttpClient) {
    super(http);
  }

  public logIn(login: string): Observable<any> {

    // let headers = new HttpHeaders();
    // headers.append('Accept', 'application/json');
    // let base64Credential: string = btoa(login + ':' + password);
    // headers.append('Authorization', 'Basic ' + base64Credential);
    //
    // return this.get('account/login', {headers: headers})
    //   .pipe(map((response: Response) => {
    //     console.log(response.json());
    //     let user = response.json();
    //     if (user) {
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //   }));

    return this.get(`users?login=${login}`).pipe(map((user: User[]) => user[0] ? user[0] : undefined));

  }
}
