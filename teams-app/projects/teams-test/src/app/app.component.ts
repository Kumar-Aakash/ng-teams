import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'team-test';
  arr = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'es',
      label: 'Español',
    },
  ];
  cb_label: string = 'Microsoft Checkbox';
  isChecked: 'true' | 'false' = 'false';
  cb_title: string = 'Microsoft Radio Button';
  isChecked1: string = 'es';
  alertType: string = 'success';
  alertMessage: string = 'Project is running';
  showDialog: boolean = false;
  dialogInterval: number = 2000;
  public selectedMenu = '';
  public menuList = [
    { name: 'Menu 1', id: 'Menu 1' },
    { name: 'Menu 2', id: 'Menu 2' },
  ];
  selectedLanguage: any;
  isLoading: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('theme-default');
    // this.document.body.classList.add('theme-blue');
    setTimeout(() => {
      this.isLoading = false;
      this.showDialog = true;
    }, 2000);
  }

  test(data: any): void {
    console.log(data);
  }
  onDropdownSelection(data: any): void {
    console.log(data);
    this.selectedLanguage = data.label;
  }
  public onMenuSelect(index: number): void {
    this.selectedMenu = this.menuList[index].id;
  }
  public onCheckChange(val: any) {
    this.isChecked = val;
    this.cb_label = `Current Value is ${val}`;
  }
  public onRadioChange(val: any) {
    this.isChecked1 = val;
  }
  public closeAlert() {
    this.alertMessage = '';
  }
  public dialogResponse(response: any) {
    console.log(response);
  }
}
