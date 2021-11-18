import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teams-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  /**
   *  Percentage completion of progress bar.
   */
  @Input() completed: number = 0;
  @Input() label: string = '';
  @Input() description: string = '';
  constructor() {}

  ngOnInit(): void {}
}
