import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {User} from '../../classes/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
    @Output() userAdded: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();
    private user: UserInterface = {
        fname: '',
        id: '',
        lname: '',
        phone: '',
    };
    constructor() { }
    ngOnInit() {
    }
    addUser() {
        this.user.id = User.getID(this.user.fname, this.user.lname, this.user.phone);
        this.userAdded.emit(this.user);
    }
}
