import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {NewStartComponent} from './new-start/new-start.component';

const routes: Routes = [
    {path: '', component: NewStartComponent},
    {path: 'test/:name', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
