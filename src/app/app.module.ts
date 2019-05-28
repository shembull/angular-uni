import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './angular-material';
import {MatIconModule, MatListModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { NewStartComponent } from './new-start/new-start.component';
import {PeopleService} from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TestComponent,
    NewStartComponent,
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
    ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
