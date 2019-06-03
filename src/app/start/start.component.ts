import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {User} from '../classes/user';
import {FirebaseService} from '../services/firebase.service';
import {UserInterface} from '../interfaces/user-interface';
import {UserAddComponent} from './user-add/user-add.component';

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
    displayedColumns: string[] = ['fname', 'lname', 'phone', 'actions'];
    @ViewChild(UserAddComponent) child;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: DataService,
        private firebaseService: FirebaseService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.myParam = params.urlParam;
          }
      );
      this.peopleService.people.subscribe(users => this.userArray = users);
      this.tableData.data = this.userArray;
      /*
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
      */
      this.firebaseService.getUsers().subscribe(users => this.dbUserArray = users);
    }
    printUser(): void {
        console.log(this.dbUserArray);
    }
    async addUser(user: UserInterface): Promise<void> {
        let successUserAdd: boolean;
        successUserAdd = await this.firebaseService.addUser(user);
        if (!successUserAdd) {
            this.snackBar.open('Der Benutzer existiert bereits!', 'Ok', {duration: 5000});
            // alert('Der Benutzer existiert bereits!');
        }
    }
    changeUserBut(user: UserInterface) {
        this.child.changeUserButFunc(user);
    }
}
