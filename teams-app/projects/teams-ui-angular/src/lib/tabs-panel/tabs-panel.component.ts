import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-tabs-panel',
  templateUrl: './tabs-panel.component.html',
  styleUrls: ['./tabs-panel.component.scss'],
})
export class TabsPanelComponent implements OnInit {
  @Input() tabs: Array<{ id: string; title: string }> = [];
  @Output() selectedTab = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onSelectTab(tab: string) {
    this.selectedTab.emit(tab);
  }
}
