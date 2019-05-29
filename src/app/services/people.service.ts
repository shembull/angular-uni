import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
    private peopleSubject = new BehaviorSubject<User[]>(
        [
        {fname: 'Niklas', lname: 'Weber', phone: 132456879},
        {fname: 'Max', lname: 'Weigt', phone: 132456879},
        {fname: 'Fabian', lname: 'Bluhmki', phone: 132456879},
        {fname: 'Mark', lname: 'Gilgen', phone: 132456879}
        ]
    );
    people = this.peopleSubject.asObservable();
    constructor() { }
    addUser(newUsers: User[]) {
      this.peopleSubject.next(newUsers);
    }
}
