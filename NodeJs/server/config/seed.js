const userModel = require("../apis/users/userModel")
const bcryptjs = require("bcryptjs")
userModel.findOne({email:"admin@gmail.com"})
.then((userData)=>{
    if(!userData){
        let userObj = new userModel()
        userObj.autoId = 1
        userObj.name = "admin"
        userObj.email = "admin@gmail.com"
        userObj.password = bcryptjs.hashSync("123", 10)
        userObj.userType = 1
        userObj.save()
        .then((userData)=>{
            console.log("Admin seeded successfully!!!")
        })
        .catch((err)=>{
            console.log("Error while Seeding admin", err)
        })
    }else{
        console.log("Admin already exists!!")
    }
})
.catch((err)=>{
    console.log("Error while seeding admin", err)
})