import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './angular-material';
import {
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { NewStartComponent } from './new-start/new-start.component';
import {PeopleService} from './services/people.service';
import { UserAddComponent } from './new-start/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TestComponent,
    NewStartComponent,
    UserAddComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatTooltipModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
    ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
