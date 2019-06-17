import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {FirebaseService} from '../services/firebase.service';
import {UserInterface} from '../interfaces/user-interface';
import {UserAddComponent} from './user-add/user-add.component';
import {AuthService} from '../services/auth.service';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'app-new-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    myParam: string;
    dbUserArray: MatTableDataSource<UserInterface> = new MatTableDataSource<UserInterface>();
    columns: string[][][] = [
        [
            ['fname', 'lname', 'mail', 'phone'],
            ['fname', 'lname', 'mail', 'phone', 'actions'],
        ], [
            ['fname', 'lname'],
            ['fname', 'lname', 'actions'],
        ]
    ];
    displayedColumns: string[];
    data;
    @ViewChild(UserAddComponent, {static: true}) child;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    cssClassContent;
    loadingCircle: boolean;
    moreThanTenUsers: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private firebaseService: FirebaseService,
        public authService: AuthService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.updateDisplayedColumns();

        this.cssClassContent = 'hide';
        this.loadingCircle = true;
        this.dbUserArray.paginator = this.paginator;
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
        this.dataService.deactivateIcon();
        // New implementation with database
        this.firebaseService.getUsers().subscribe(users => {
            this.dbUserArray.data = users;
            this.loadingCircle = false;
            this.cssClassContent = 'show';
        });
        this.dbUserArray.sort = this.sort;

        this.authService.loginState.subscribe(state => {
            this.dataService.windowInnerWidth.subscribe( size => {
                if (state) {
                    this.displayedColumns = this.columns[size][1];
                } else {
                    this.displayedColumns = this.columns[size][0];
                }
            });
        });
    }
    async addUser(user: UserInterface): Promise<void> {
        let successUserAdd: boolean;
        successUserAdd = await this.firebaseService.addUser(user);
        if (!successUserAdd) {
            this.snackBar.open('Der Benutzer existiert bereits!', 'Ok', {duration: 5000});
        }
    }

    filter(value: string) {
        this.dbUserArray.filter = value.trim().toLocaleLowerCase();
    }

    deleteUser(user: UserInterface): void {
        return this.firebaseService.deleteUser(user.id);
    }

    updateDisplayedColumns(): void {
        this.dataService.changeWindowSize(window.innerWidth);
    }
}
