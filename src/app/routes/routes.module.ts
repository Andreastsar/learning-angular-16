import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
// dashboard pages
import { DirectivesComponent } from './directives/directives.component';
// single pages
import { CallbackComponent } from './passport/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { RouteRoutingModule } from './routes-routing.module';
import {Highlight} from "ngx-highlightjs";

const COMPONENTS: Array<Type<void>> = [
  DirectivesComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent
];

@NgModule({
  imports: [SharedModule, RouteRoutingModule, Highlight],
  declarations: COMPONENTS
})
export class RoutesModule {}
