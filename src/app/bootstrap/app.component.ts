import { Component } from '@angular/core';
import { I18nService } from '../core/services/i18n.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="showApp">
      <router-outlet></router-outlet>
    </ng-container>
  `
})
export class AppComponent {
  showApp = true;

  constructor(
    private i18n: I18nService
  ) {
    // debugger
    // Setup i18N config
    this.i18n.init();
  }
}
