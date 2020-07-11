// run mongodb 
// create a database using "use loginForm"
// then in terminal 
// mongo loginForm "location of this file"

const Users={
    username:'Ghost404',
    password:'12345',
    name:'Ghost',
    gender:'Male',
    age:'33', 
}


db.User.insertOne(Users);