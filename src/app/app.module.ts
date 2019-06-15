import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './angular-material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import {DataService} from './services/data.service';
import { UserAddComponent } from './start/user-add/user-add.component';
import { UserPageComponent } from './user-page/user-page.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FirebaseModules} from './firebase-modules';
import {MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NewUserPageComponent } from './new-user-page/new-user-page.component';
import { ParallaxDirective } from './new-user-page/parallax.directive';
import {AngularResizedEventModule} from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TestComponent,
    StartComponent,
    UserAddComponent,
    UserPageComponent,
    NewUserPageComponent,
    ParallaxDirective,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        FirebaseModules,
        MatSortModule,
        FlexLayoutModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatTabsModule,
        AngularResizedEventModule,
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
