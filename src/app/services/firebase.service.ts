import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../classes/user';
import {config} from '../app.config';
import {UserInterface} from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFirestoreCollection<UserInterface>;
    private docRef: AngularFirestoreDocument<any>;

    constructor(private db: AngularFirestore) {
      this.users = db.collection<UserInterface>(config.collection_endpoint);
    }
    getUsers() {
      return this.db.collection<UserInterface>('users').snapshotChanges();
    }
    getUser(id: string): UserInterface {
      const returnUser: UserInterface = {fname: '', id: '', lname: '', phone: ''};
      this.docRef = this.db.collection(config.collection_endpoint).doc(id);
      this.docRef.get().toPromise().then( doc => {
          if (doc.exists) {
              returnUser.id = doc.data().id;
              returnUser.fname = doc.data().fname;
              returnUser.lname = doc.data().lname;
              returnUser.phone = doc.data().phone;
          }
      });
      return returnUser;
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
