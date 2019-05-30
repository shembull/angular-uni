import {sha256} from 'js-sha256';

export class User {
    public fname: string;
    public lname: string;
    public phone: string;
    public id: string;
    constructor(fname: string, lname: string, phone: string) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.id = sha256(this.fname + this.lname + this.phone);
    }
    updateID(): void {
        this.id = sha256(this.fname + this.lname + this.phone);
    }
}
