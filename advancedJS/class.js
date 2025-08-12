class User{
    constructor(userName,email,pass){
        this.userName = userName;
        this.email = email;
        this.pass =pass
    }

     encryptPass(){
        return `${this.pass}abc`
    }

}

const u1 = new User("masuk","masuk@email",123)
console.log(u1)

console.log(u1.encryptPass())


class Static{
    static count(){
        console.log("me")
    }
}

const b1 = new Static()
// console.log(b1.count())
console.log(Static.count())