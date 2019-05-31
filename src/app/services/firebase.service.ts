import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../classes/user';
import {config} from '../app.config';
import {UserInterface} from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFirestoreCollection<UserInterface>;
    private docRef;

  constructor(private db: AngularFirestore) {
      this.users = db.collection<UserInterface>(config.collection_endpoint);
  }
  getUsers() {
      return this.db.collection<UserInterface>('users').snapshotChanges();
  }
  getUser(user: UserInterface) {
      this.docRef = this.db.collection(config.collection_endpoint).doc(user.id);
      this.docRef.get().then( doc => {
          console.log(doc.data());
      });
  }
  addUser(user: UserInterface) {
      return this.users.doc(user.id).set(user);
  }
  updateUser(user: UserInterface) {
      delete user.id;
      this.db.doc<User>('users/' + user.id).update(user);
  }
  deleteUser(userID: string) {
      this.db.doc<User>('users/' + userID).delete();
  }
}
