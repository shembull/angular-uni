import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {FirebaseService} from '../services/firebase.service';
import {UserInterface} from '../interfaces/user-interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
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
    async ngOnInit() {
        this.route.params.subscribe(
          (params: Params) => {
              this.id = params.id;
          }
        );
        this.user = await this.firebaseService.getUser(this.id);
        this.dataService.toolbarHeader.subscribe(title => this.title = title);
        this.dataService.changeToolbarTitle(this.title.concat(' - ', this.user.fname, ' ', this.user.lname));
    }
    logUser() {
        this.firebaseService.getUser(this.id).then(u => console.log(u));
        // console.log(this.user);
    }
}
