import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    private fname: string;
    private lname: string;
    private phone: string;

  constructor(
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.fname = params.fname;
              this.lname = params.lname;
              this.phone = params.phone;
          }
      );
  }

}
