import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {NewUserPageComponent} from './new-user-page/new-user-page.component';

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'user/:id', component: NewUserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
