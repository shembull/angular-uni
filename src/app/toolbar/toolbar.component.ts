import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {AuthService} from '../services/auth.service';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    title: string;
    arrow: boolean;
    constructor(
      private dataService: DataService,
      private authService: AuthService,
      private dialog: MatDialog,
    ) {}

    ngOnInit() {
      this.dataService.toolbarHeader.subscribe(title => this.title = title);
      this.dataService.backIconActive.subscribe(acitve => this.arrow = acitve);
    }

    openLoginDialog(): void {
        this.dialog.open(LoginDialogComponent, {
            width: '500px'
        });
    }
}
