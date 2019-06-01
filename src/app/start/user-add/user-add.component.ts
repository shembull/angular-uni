import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {User} from '../../classes/user';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
    @Output() userAdded: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();
    user: UserInterface = {
        fname: '',
        id: '',
        lname: '',
        phone: '',
    };
    button = {
        action: 'Hinzufügen',
        func: this.addUser,
    };
    constructor(
        private firebaseService: FirebaseService
    ) { }
    ngOnInit() { }
    addUser(comp: UserAddComponent): void {
        comp.user.id = User.getID(comp.user.fname, comp.user.lname, comp.user.phone);
        comp.userAdded.emit(comp.user);
        comp.user = {
            fname: '',
            id: '',
            lname: '',
            phone: '',
        };
    }
    changeUserButFunc(user: UserInterface): void {
        this.user = this.firebaseService.getUser(user.id);
        this.button.action = 'Ändern';
        this.button.func = this.updateUser;
        console.log(user, this.user);
    }
    updateUser(comp: UserAddComponent): void {
        comp.firebaseService.updateUser(comp.user);
        comp.user = {
            fname: '',
            id: '',
            lname: '',
            phone: '',
        };
        comp.button.action = 'Hinzufügen';
        comp.button.func = comp.addUser;
    }
}
