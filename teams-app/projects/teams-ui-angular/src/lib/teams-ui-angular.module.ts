import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SingleSelectComponent } from './single-select/single-select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SingleSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SingleSelectComponent
  ]
})
export class TeamsUiAngularModule { }
