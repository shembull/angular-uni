import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {ActivatedRoute, Params} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {ResizedEvent} from 'angular-resize-event';
import {DataService} from '../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogPopUpComponent} from './dialog-pop-up/dialog-pop-up.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {
    innerWidth: number;
    private id;
    title: string;
    user: UserInterface;
    topOffset: number;
    private newValue: string;

    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private dataService: DataService,
        public authService: AuthService,
        private dialog: MatDialog,
    ) {
        this.user = {
            fname: '',
            lname: '',
            phone: '',
            mail: '',
            id: ''
        };
    }

    static log(el: any) {
        console.log(el);
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;

        this.route.params.subscribe(
            (params: Params) => {
                this.id = params.id;
            }
        );
        this.firebaseService.getUser(this.id).then(user => {
            this.user = user;
        });
        this.dataService.activateIcon();
    }

    changeTop(event: ResizedEvent) {
        if (event.newWidth <= 599) {
            this.topOffset = 56;
        } else {
            this.topOffset = 64;
        }
    }

    openChangeDialog(field: string): void {
        const dialogRef = this.dialog.open(DialogPopUpComponent, {
            width: '250px',
            data: {name: this.user.fname, newValue: '', field}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.newValue = result;
            if (this.newValue !== undefined) {
                switch (field) {
                    case 'phone':
                        this.user.phone = this.newValue;
                        this.firebaseService.updateUser(this.user);
                        break;
                    case 'email':
                        this.user.mail = this.newValue;
                        this.firebaseService.updateUser(this.user);
                        break;
                }
            }
        });
    }
}
