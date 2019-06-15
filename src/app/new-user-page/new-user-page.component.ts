import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {ActivatedRoute, Params} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {
    innerWidth: number;
    private id; title: string;
    user: UserInterface;

    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService
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
    }

}
