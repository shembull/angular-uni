import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PeopleService, User} from '../services/people.service';

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
    addUser(): void {
        this.users.push({fname: 'Franz', lname: 'Zahn', phone: 987654321});
        this.peopleService.addUser(this.users);
    }
}
