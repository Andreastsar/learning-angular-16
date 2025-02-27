import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import {CustomDirective} from "../routes/directives/custom-directives/custom-directive.directive";
import {CustomDirectivesModule} from "../routes/directives/custom-directives.module";
import {UnitTestingComponent} from "../routes/unit-testing/unit-testing.component";
import {Highlight} from "ngx-highlightjs";
import {UnitTestingBasicsComponent} from "../routes/unit-testing/unit-testing-basics/unit-testing-basics.component";

// #region third libs

const THIRDMODULES: Array<Type<void>> = [];

// #endregion

// #region your componets & directives

const COMPONENTS: Array<Type<void>> = [UnitTestingComponent,UnitTestingBasicsComponent];
const DIRECTIVES: Array<Type<void>> = [CustomDirective];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    CustomDirectivesModule,
    Highlight
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    CustomDirectivesModule
  ]
})
export class SharedModule { }
