import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../classes/user';
import {config} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFirestoreCollection<User>;
    private userDoc: AngularFirestoreDocument<User>;

  constructor(private db: AngularFirestore) {
      this.users = db.collection<User>(config.collection_endpoint)
  }
  addUser(user: User) {
      this.users.add(user);
  }
}
