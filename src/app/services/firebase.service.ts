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
    private docRef: AngularFirestoreDocument<UserInterface>;

    constructor(private db: AngularFirestore) {
      this.users = db.collection<UserInterface>(config.collection_endpoint);
    }
    getUsers() {
      return this.db.collection<UserInterface>('users').snapshotChanges();
    }
    getUser(id: string): UserInterface {
      const returnUser: UserInterface = {fname: '', id: '', lname: '', phone: ''};
      this.docRef = this.db.collection<UserInterface>(config.collection_endpoint).doc<UserInterface>(id);
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
      return this.users.doc<UserInterface>(user.id).set(user);
    }
    deleteUser(userID: string) {
      this.users.doc<UserInterface>(userID).delete();
    }
    updateUser(user: UserInterface) {
        this.deleteUser(user.id);
        user.id = User.getID(user.fname, user.lname, user.phone);
        this.addUser(user);
    }
}
