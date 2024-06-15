class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());//error-: because createId is a static function
console.log(hitesh.logMe());
console.log(hitesh);

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.logMe());
console.log(iphone.email);
// console.log(iphone.createId()); // error:- because static function
