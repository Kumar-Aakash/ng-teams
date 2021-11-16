import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'info';
  @Input() alert_message: string = 'Alert messsage';
  @Output() alertClose = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  closeAlert() {
    this.alertClose.emit('close');
  }
}
