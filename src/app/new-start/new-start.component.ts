import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-new-start',
  templateUrl: './new-start.component.html',
  styleUrls: ['./new-start.component.css']
})
export class NewStartComponent implements OnInit {
    myParam: string;

  constructor(
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.myParam = params.urlParam;
          }
      );
  }

}
