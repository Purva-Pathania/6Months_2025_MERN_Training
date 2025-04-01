const CustomerModel = require("./CustomerModel")
const UserModel = require("../users/userModel")
const bcryptjs = require("bcryptjs")
register=(req,res)=>{
    let validation=""
    let formData = req.body
    if(!formData.name){
        validation+="Name is required"
    }
    if(!formData.email){
        validation+=" Email is required"
    }
    if(!formData.password){
        validation+=" Password is required"
    }
    if(!formData.phone){
        validation+=" Phone is required"
    }
    if(!formData.address){
        validation+=" Address is required"
    }
    if(!!validation.trim()){
        req.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        UserModel.findOne({email:formData.email})
        .then(async (userData)=>{
            if(!userData){
                let userTotal = await UserModel.countDocuments().exec()
                let userObj = new UserModel()
                userObj.autoId = userTotal+1
                userObj.name = formData.name
                userObj.email = formData.email
                userObj.password = bcryptjs.hashSync("123456", 10)
                userObj.userType = 2
                userObj.save()
                .then(async (userData)=>{
                    let customerTotal = await CustomerModel.countDocuments().exec()
                    let customerObj = new CustomerModel()
                    customerObj.autoId = customerTotal+1
                    customerObj.phone = formData.phone
                    customerObj.address = formData.address
                    customerObj.userId = userData._id
                    customerObj.save()
                    .then((customerData)=>{
                        res.json({
                            status:201,
                            success:true,
                            message:"Customer Registered Successfully!!!",
                            customerData,
                            userData
                        })
                    })
                    .catch((err)=>{
                        res.json({
                            status:500,
                            success:false,
                            message:"Internal Server Error",
                            error:err
                        })
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error"
                    })
                })
            }else{
                res.json({
                    status:200,
                    success:false,
                    message:"Data already exists!!!",
                    data:userData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error"
            })
        })
    }
}
module.exports = {register}