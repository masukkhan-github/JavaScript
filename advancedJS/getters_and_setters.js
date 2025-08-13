class User{
    constructor(email,pass){
        this.email = email,
        this.pass = pass
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set pass(value){
        this._pass = value
    }

    get pass(){
      return  this._pass.toUpperCase() 
    }
}

const ob = new User("masuk@email","abc")
console.log(ob.pass)