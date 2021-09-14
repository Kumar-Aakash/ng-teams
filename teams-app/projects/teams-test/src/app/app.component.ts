import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'team-test';
  arr = [
    {
      "value": "en",
      "label": "English"
    },
    {
      "value": "es",
      "label": "Español"
    }
  ];
  public selectedMenu = '';
  public menuList = [
    { name: 'Menu 1', id: 'Menu 1' },
    { name: 'Menu 2', id: 'Menu 2' }
  ];
  selectedLanguage: any;
  constructor(@Inject(DOCUMENT) private document: Document
    ) {
    this.document.body.classList.add('theme-default');
    // this.document.body.classList.add('theme-blue');

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
}
