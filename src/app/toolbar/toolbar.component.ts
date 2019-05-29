import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {User} from '../classes/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    users: User[];
    constructor(
      private peopleService: PeopleService
    ) {}
    @Output() buttonClick = new EventEmitter<{buttonTitle: string}>();
    buttonClicked(butTitle: string) {
      this.buttonClick.emit({buttonTitle: butTitle});
    }
    ngOnInit() {
      this.peopleService.people.subscribe(users => this.users = users);
    }
}
