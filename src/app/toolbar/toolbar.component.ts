import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    title: string;
    arrow: boolean;
    constructor(
      private dataService: DataService
    ) {}
    ngOnInit() {
      this.dataService.toolbarHeader.subscribe(title => this.title = title);
      this.dataService.backIconActive.subscribe(acitve => this.arrow = acitve);
    }
}
