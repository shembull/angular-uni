import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireMessagingModule
    ],
    exports: [
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireMessagingModule
    ]
})

export class FirebaseModules { }
