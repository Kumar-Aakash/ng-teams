import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'teams-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'
 ],
 encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() title : string = "";
  @Input() disabled : boolean = false;
  @Output() buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClick.emit();
  }

}
