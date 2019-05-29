import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../classes/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
    @Output() userAdded: EventEmitter<User> = new EventEmitter<User>();
    private user: User = new User();
    constructor() { }
    ngOnInit() {
    }
    print($event: MouseEvent) {
        console.log($event);
    }

    addUser() {
        this.userAdded.emit(this.user);
    }
}
