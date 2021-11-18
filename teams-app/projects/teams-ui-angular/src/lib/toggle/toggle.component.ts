import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() label: string = '';
  @Input() isChecked: 'true' | 'false' = 'false';
  @Output() onChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onValueChange(val: any) {
    this.onChange.emit(val);
  }
}
