import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
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
    dbUserArray: MatTableDataSource<UserInterface> = new MatTableDataSource<UserInterface>();
    displayedColumns: string[] = ['fname', 'lname', 'mail', 'phone', 'actions'];
    data;
    @ViewChild(UserAddComponent, {static: true}) child;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    showContent;
    showLoadingCircle;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private firebaseService: FirebaseService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.showContent = {display: 'none'};
        this.showLoadingCircle = {display: 'inline'};
        this.route.params.subscribe(
            (params: Params) => {
                this.myParam = params.urlParam;
            }
        );
        // Old implementation with local array
        /*
        this.dataService.people.subscribe(users => this.userArray = users);
        this.tableData.data = this.userArray;
        */
        this.dataService.changeToolbarTitle('Telefonbuch');
        // New implementation with database
        this.firebaseService.getUsers().subscribe(users => {
            this.dbUserArray.data = users;
            this.showLoadingCircle = {display: 'none'};
            this.showContent = {display: 'inline'};
        });
        this.dbUserArray.sort = this.sort;
    }
    printUser(): void {
        console.log(this.dbUserArray);
    }
    async addUser(user: UserInterface): Promise<void> {
        let successUserAdd: boolean;
        successUserAdd = await this.firebaseService.addUser(user);
        if (!successUserAdd) {
            this.snackBar.open('Der Benutzer existiert bereits!', 'Ok', {duration: 10000});
            // alert('Der Benutzer existiert bereits!');
        }
    }
    changeUserBut(user: UserInterface) {
        this.child.changeUserButFunc(user);
    }

    filter(value: string) {
        this.dbUserArray.filter = value.trim().toLocaleLowerCase();
    }
}
