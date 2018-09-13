import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {MoviesComponent} from './movies/movies.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [], children: [
      {path: 'movies', component: MoviesComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
