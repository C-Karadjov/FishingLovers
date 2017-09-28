class User {
    constructor(firstName, lastName, username, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
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
    
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}

export { User as default };