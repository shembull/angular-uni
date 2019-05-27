import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {}
  @Output() buttonClick = new EventEmitter<{buttonTitle: string}>();
  buttonClicked(butTitle: string) {
      this.buttonClick.emit({buttonTitle: butTitle});
  }

  ngOnInit() {
  }

}
