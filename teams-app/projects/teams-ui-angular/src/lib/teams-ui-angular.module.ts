import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TabsPanelComponent } from './tabs-panel/tabs-panel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SingleSelectComponent,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent,
    AlertComponent,
    LoaderComponent,
    ConfirmDialogComponent,
    ProgressBarComponent,
    TabsPanelComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    SingleSelectComponent,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent,
    AlertComponent,
    LoaderComponent,
    ConfirmDialogComponent,
    ProgressBarComponent,
    TabsPanelComponent,
  ],
})
export class TeamsUiAngularModule {}
