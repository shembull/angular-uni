import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {User} from '../../classes/user';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

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
    fnameFormControl = new FormControl('', [
        Validators.required,
    ]);
    lnameFormControl = new FormControl('', [
        Validators.required,
    ]);
    emailFormControl = new FormControl('', [
        Validators.email,
    ]);
    phoneFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[+]\d\d+/)
    ]);
    matcher = new UserErrorStateMatcher();
    constructor() { }
    ngOnInit() { }
    addUser(): void {
        this.user.id = User.getID(this.user);
        this.userAdded.emit(this.user);
        this.user = {
            fname: '',
            id: '',
            lname: '',
            mail: '',
            phone: '',
        };
        this.fnameFormControl.reset();
        this.lnameFormControl.reset();
        this.emailFormControl.reset();
        this.phoneFormControl.reset();
    }
}

export class UserErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
