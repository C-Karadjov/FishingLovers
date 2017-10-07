class User {
    constructor(firstName, lastName, username, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
    }
    
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}

export { User };