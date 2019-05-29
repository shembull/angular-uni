import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {MatTableDataSource} from '@angular/material';
import {User} from '../classes/user';

@Component({
  selector: 'app-new-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    myParam: string;
    userArray: User[];
    tableData: MatTableDataSource<User> = new MatTableDataSource();
    displayedColumns: string[] = ['fname', 'lname', 'phone'];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.myParam = params.urlParam;
          }
      );
      this.peopleService.people.subscribe(users => this.userArray = users);
      this.tableData.data = this.userArray;
    }
    printUser(): void {
        console.log(this.userArray);
    }
    updateData(user: User): void {
        this.userArray.push(user);
        this.peopleService.addUser(this.userArray);
        // Update table because the subscription dose not work due to performance reasons
        this.tableData._updateChangeSubscription();
    }

    showUser(fname: string, lname: string) {

    }
}
