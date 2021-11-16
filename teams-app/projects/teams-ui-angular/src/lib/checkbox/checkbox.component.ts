import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'teams-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements OnInit {
  @Input() cb_label: string = '';
  @Input() isChecked: 'true' | 'false' = 'false';
  @Output() onChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onValueChange(val: any) {
    this.onChange.emit(val);
  }
}
