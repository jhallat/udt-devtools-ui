import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  side = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
