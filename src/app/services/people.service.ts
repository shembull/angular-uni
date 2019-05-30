import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
    private peopleSubject = new BehaviorSubject<User[]>(
        [
        new User('Niklas', 'Weber', '123456789'),
        new User('Max', 'Weigt', '123456789'),
        new User('Fabian', 'Bluhmki', '123456789'),
        new User('Mark', 'Gilgen', '123456789')
        ]
    );
    people = this.peopleSubject.asObservable();
    constructor() { }
    addUser(newUsers: User[]) {
      this.peopleSubject.next(newUsers);
    }
}
