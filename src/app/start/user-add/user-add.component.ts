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
        mail: '',
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
        comp.user.id = User.getID(comp.user);
        comp.userAdded.emit(comp.user);
        comp.user = {
            fname: '',
            id: '',
            lname: '',
            mail: '',
            phone: '',
        };
    }
    async changeUserButFunc(user: UserInterface): Promise<void> {
        this.user = await this.firebaseService.getUser(user.id);
        this.button.action = 'Ändern';
        this.button.func = this.updateUser;
    }
    updateUser(comp: UserAddComponent): void {
        comp.firebaseService.updateUser(comp.user);
        comp.user = {
            fname: '',
            id: '',
            lname: '',
            phone: '',
            mail: '',
        };
        comp.button.action = 'Hinzufügen';
        comp.button.func = comp.addUser;
    }
}
