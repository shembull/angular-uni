import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'test/:name', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
