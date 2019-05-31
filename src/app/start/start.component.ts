import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {MatTableDataSource} from '@angular/material';
import {User} from '../classes/user';
import {FirebaseService} from '../services/firebase.service';
import {UserInterface} from '../interfaces/user-interface';

@Component({
  selector: 'app-new-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    myParam: string;
    userArray: User[];
    dbUserArray: UserInterface[];
    tableData: MatTableDataSource<UserInterface> = new MatTableDataSource<UserInterface>();
    displayedColumns: string[] = ['fname', 'lname', 'phone'];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService,
        private firebaseService: FirebaseService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.myParam = params.urlParam;
          }
      );
      this.peopleService.people.subscribe(users => this.userArray = users);
      this.tableData.data = this.userArray;
      this.firebaseService.getUsers().subscribe(
          data => {
              this.dbUserArray = data.map(e => {
                  return {
                      id: e.payload.doc.id,
                      ...e.payload.doc.data()
                  } as UserInterface;
              });
          }
      );
    }
    printUser(): void {
        console.log(this.dbUserArray);
    }
    updateData(user: UserInterface): void {
        // this.userArray.push(user);
        // console.log(this.userArray);
        // this.peopleService.addUser(this.userArray);
        // Update table because the subscription dose not work due to performance reasons
        // this.tableData._updateChangeSubscription();
        this.firebaseService.addUser(user);
    }
}
