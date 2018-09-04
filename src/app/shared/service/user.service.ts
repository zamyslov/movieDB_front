import {BaseApi} from '../base-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user.module';

export class UserService extends BaseApi {


  constructor(http: HttpClient) {
    super(http);
  }

  getUserByLogin(login: string): Observable<any> {
    return this.http.get(`rest/admin/users/by?login=${login}`).pipe(map((user: User[]) => {
      user[0] ? user[0] : undefined;
    }));
  }
}
