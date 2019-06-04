import {sha256} from 'js-sha256';
import {UserInterface} from '../interfaces/user-interface';

export class User implements UserInterface {
    public fname: string;
    public lname: string;
    public phone: string;
    public mail: string;
    public id: string;
    constructor(fname: string, lname: string, phone: string) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.id = sha256(this.fname + this.lname + this.phone);
    }
    static getID(user: UserInterface): string {
        return sha256(user.fname + user.lname + user.phone + user.mail);
    }
    updateID(): void {
        this.id = sha256(this.fname + this.lname + this.phone);
    }
}
