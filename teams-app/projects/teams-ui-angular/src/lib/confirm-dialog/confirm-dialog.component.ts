import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() intervalValue: number = 0;
  getResult = false;
  @Input() message: string = '';
  @Input() showDialog: boolean = false;
  @Output() resultResponse = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  dialogeYes(): any {
    clearInterval(this.intervalValue);
    this.getResult = true;
    this.resultResponse.emit(this.getResult);
    this.showDialog = false;
  }

  dialogeNo(): any {
    this.showDialog = false;
    this.getResult = false;
    this.resultResponse.emit(this.getResult);
  }
}
