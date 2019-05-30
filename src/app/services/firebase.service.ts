import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../classes/user';
import {config} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) {
      this.users = db.collection<User>(config.collection_endpoint);
  }
  getUsers() {
      return this.db.collection<User>('users').snapshotChanges();
  }
  addUser(user: User) {
      return this.db.collection('users').add(user);
  }
  updateUser(user: User) {
      delete user.id;
      this.db.doc<User>('users/' + user.id).update(user);
  }
  deleteUser(userID: string) {
      this.db.doc<User>('users/' + userID).delete();
  }
}
