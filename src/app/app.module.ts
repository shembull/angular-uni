import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './angular-material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import {PeopleService} from './services/people.service';
import { UserAddComponent } from './start/user-add/user-add.component';
import { UserPageComponent } from './user-page/user-page.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FirebaseModules} from './firebase-modules';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TestComponent,
    StartComponent,
    UserAddComponent,
    UserPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        FirebaseModules,
    ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
