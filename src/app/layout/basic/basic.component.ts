import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [asideUser]="asideUserTpl" [content]="contentTpl" [customError]="null" [options]="options">
      <!--      <layout-default-header-item direction="left">-->
      <!--        <a layout-default-header-item-trigger href="//github.com/ng-alain/ng-alain" target="_blank">-->
      <!--          <i nz-icon nzType="github"></i>-->
      <!--        </a>-->
      <!--      </layout-default-header-item>-->
      <!--      <layout-default-header-item direction="left" hidden="mobile">-->
      <!--        <a layout-default-header-item-trigger routerLink="/passport/lock">-->
      <!--          <i nz-icon nzType="lock"></i>-->
      <!--        </a>-->
      <!--      </layout-default-header-item>-->
      <!--      <layout-default-header-item direction="left" hidden="pc">-->
      <!--        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">-->
      <!--          <i nz-icon nzType="search"></i>-->
      <!--        </div>-->
      <!--      </layout-default-header-item>-->
      <!--      <layout-default-header-item direction="middle">-->
      <!--        <header-search class="alain-default__search" [toggleChange]="searchToggleStatus"></header-search>-->
      <!--      </layout-default-header-item>-->
      <layout-default-header-item direction="right" hidden="mobile">
        <div [nzDropdownMenu]="settingsMenu" layout-default-header-item-trigger nz-dropdown nzPlacement="bottomRight"
             nzTrigger="click">
          <i nz-icon nzType="setting"></i>
        </div>
        <nz-dropdown-menu #settingsMenu="nzDropdownMenu">
          <div nz-menu style="width: 200px;">
            <!--            <div nz-menu-item>-->
            <!--              <header-fullscreen></header-fullscreen>-->
            <!--            </div>-->
            <!--            <div nz-menu-item>-->
            <!--              <header-clear-storage></header-clear-storage>-->
            <!--            </div>-->
            <div nz-menu-item>
              <header-i18n></header-i18n>
            </div>
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <header-user></header-user>
      </layout-default-header-item>

      <!-- User Aside -->
      <ng-template #asideUserTpl>
<!--        <div [nzDropdownMenu]="userMenu" class="alain-default__aside-user" nz-dropdown nzTrigger="click">-->
<!--          <nz-avatar [nzSrc]="user.avatar" class="alain-default__aside-user-avatar"></nz-avatar>-->
<!--          <div class="alain-default__aside-user-info">-->
<!--            <strong>{{ user.name }}</strong>-->
<!--            <p class="mb0">{{ user.email }}</p>-->
<!--          </div>-->
<!--        </div>-->
        <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' | i18n }}</li>
            <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' | i18n }}</li>
          </ul>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>

<!--    <setting-drawer *ngIf="showSettingDrawer"></setting-drawer>-->
<!--    <theme-btn></theme-btn>-->
  `,
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
  };
  searchToggleStatus = false;
  showSettingDrawer = !environment.production;
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) {}
}
