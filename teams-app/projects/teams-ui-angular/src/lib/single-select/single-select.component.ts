import { Component, EventEmitter, Input, OnInit, Output,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'teams-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent implements OnInit {
  @Input() optionArray : any = [];
  @Input() selectedValue  : any;
  @Input() cssWidth = false;
  @Output() selectedValueEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownSelection(val: any, label:any): void {
    this.selectedValueEmit.emit({val, label});
  }

}
