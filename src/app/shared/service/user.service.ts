import {BaseApi} from '../base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService extends BaseApi {

  constructor(http: HttpClient) {
    super(http);
  }

  public logIn(login: string, password: string) {

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    let base64Credential: string = btoa(login + ':' + password);
    headers.append('Authorization', 'Basic ' + base64Credential);

    return this.get('account/login', {headers: headers})
      .pipe(map((response: Response) => {
        console.log(response.json());
        let user = response.json();
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }));
  }
}
