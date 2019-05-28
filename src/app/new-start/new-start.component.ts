import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PeopleService, User} from '../services/people.service';

@Component({
  selector: 'app-new-start',
  templateUrl: './new-start.component.html',
  styleUrls: ['./new-start.component.css']
})
export class NewStartComponent implements OnInit {
    myParam: string;
    users: User[];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private peopleService: PeopleService
  ) { }

    ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.myParam = params.urlParam;
          }
      );
      this.peopleService.people.subscribe(users => this.users = users);
  }
    printUser(): void {
      console.log(this.users);
  }
}
