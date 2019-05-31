import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {FirebaseService} from '../services/firebase.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    private id: string;
    private user;
    private sub: Subscription;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService,
        private firebaseService: FirebaseService
    ) { }
    ngOnInit() {
        this.route.params.subscribe(
          (params: Params) => {
              this.id = params.id;
          }
        );
        this.sub = this.firebaseService.users.doc(this.id).valueChanges().subscribe(
          user => this.user = user
        );
    }
    logUser() {
        console.log(this.user);
    }
}
