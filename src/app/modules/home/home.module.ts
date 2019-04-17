import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {MatMenuModule, MatButtonModule} from '@angular/material';

// Import components
import { components } from './components';


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule, MatButtonModule,
    TranslateModule.forChild({}),
  ]
})
export class HomeModule { }
