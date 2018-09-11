import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system.component';
import {SidebarComponent} from './shared/component/sidebar/sidebar.component';
import {HeaderComponent} from './shared/component/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';
import {MoviesComponent} from './movies/movies.component';
import {SystemRoutingModule} from './system.routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule],
  declarations: [
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    MoviesComponent
  ],
  providers: []
})
export class SystemModule {

}
