function setUser(userName){
    this.userName = userName;
    console.log("called")
}

function user(userName,email,pass){
    this.email = email;
    this.pass =pass;
    setUser.call(this,userName) //this is used as parameter and current context of the parent function.
}

const u1 = new user("masuk","masuk@gmail.com","mass");
console.log(u1)
