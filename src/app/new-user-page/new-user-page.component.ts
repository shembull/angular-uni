import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../services/data.service';
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
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
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
            this.dataService.toolbarHeader.subscribe(title => this.title = title);
            this.dataService.changeToolbarTitle(this.title.concat(' - ', this.user.fname, ' ', this.user.lname));
        });
    }

}
