import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [], children: [
      {path: 'movies', component: MoviesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
