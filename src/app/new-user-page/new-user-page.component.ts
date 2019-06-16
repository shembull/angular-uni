import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {ActivatedRoute, Params} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {ResizedEvent} from 'angular-resize-event';
import {DataService} from '../services/data.service';

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

    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private dataService: DataService,
    ) {
        this.user = {
            fname: '',
            lname: '',
            phone: '',
            mail: '',
            id: ''
        };
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

    log(el: any) {
        console.log(el);
    }
}
