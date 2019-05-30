import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../classes/user';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    private id: string;
    private users: User[];
    private user: User;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private peopleService: PeopleService
  ) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.id = params.id;
          }
      );
      this.peopleService.people.subscribe(users => this.users = users);
      for (const u of this.users) {
          if (u.id === this.id) {
              this.user = u;
              break;
          }
      }
  }

}
