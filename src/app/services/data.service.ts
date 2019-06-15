import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private peopleSubject = new BehaviorSubject<User[]>(
        [
        new User('Niklas', 'Weber', '123456789'),
        new User('Max', 'Weigt', '123456789'),
        new User('Fabian', 'Bluhmki', '123456789'),
        new User('Mark', 'Gilgen', '123456789')
        ]
    );
    private toolbarHeaderSubject = new BehaviorSubject<string>('Telefonbuch');
    people: Observable<User[]> = this.peopleSubject.asObservable();
    toolbarHeader: Observable<string> = this.toolbarHeaderSubject.asObservable();
    constructor() { }
    addUser(newUsers: User[]): void {
      return this.peopleSubject.next(newUsers);
    }
    changeToolbarTitle(title: string): void {
        return this.toolbarHeaderSubject.next(title);
    }
}
