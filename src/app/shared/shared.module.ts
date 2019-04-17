import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pipes } from './pipes';
import { components } from './components';

@NgModule({
  declarations: [
    components,
    pipes,
  ],
  imports: [
    CommonModule
  ],
  exports: [components, pipes]
})
export class SharedModule { }
