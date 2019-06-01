import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../classes/user';
import {config} from '../app.config';
import {UserInterface} from '../interfaces/user-interface';
import firestore from '@angular/fire/firebase-node';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFirestoreCollection<UserInterface>;

    constructor(private db: AngularFirestore) {
      this.users = db.collection<UserInterface>(config.collection_endpoint);
    }
    getUsers() {
      return this.db.collection<UserInterface>('users').snapshotChanges();
    }
    // Asynchronous user retrieval
    async getUser(id: string): Promise<UserInterface> {
        const returnUser: UserInterface = {fname: '', id: '', lname: '', phone: ''};
        const doc = await this.getUserPromise(id);
        if (doc.exists) {
            returnUser.id = doc.data().id;
            returnUser.fname = doc.data().fname;
            returnUser.lname = doc.data().lname;
            returnUser.phone = doc.data().phone;
        }
        return returnUser;
    }
    async getUserPromise(id: string): Promise<firestore.DocumentSnapshot> {
        const docRef = this.db.collection<UserInterface>(config.collection_endpoint).doc<UserInterface>(id);
        return docRef.get().toPromise();
    }
    async addUser(user: UserInterface): Promise<boolean> {
        // check if user already exists
        const userDb = await this.getUserPromise(user.id);
        if (userDb.exists) {
            return false;
        } else {
            this.users.doc<UserInterface>(user.id).set(user);
            return true;
        }
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
