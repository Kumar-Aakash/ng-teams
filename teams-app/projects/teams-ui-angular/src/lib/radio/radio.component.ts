import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() title: string = '';
  @Input() radio_options: any = [];
  @Input() selectedValue: string = '';
  @Output() onChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onValueChange(val: any) {
    this.onChange.emit(val);
  }
}
