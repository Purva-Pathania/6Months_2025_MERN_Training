const BrandModel = require("./brandModel")
const brand= (req,res)=>{
    let validation = ""
    if(!req.body.brandName){
        validation+="Brand Name is required"
    }
    if(!!validation.trim()){
        res.json({
            staus:422,
            success:false,
            message:validation
        })
    }else{
        BrandModel.findOne({brandName:req.body.brandName})
        .then(async(brandData)=>{
            if(!brandData){
                let brandObj = new BrandModel()
                let total=await BrandModel.countDocuments().exec()
                brandObj.autoId = total+1
                brandObj.brandName = req.body.brandName
                brandObj.save()
                .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Brand Added",
                        data: brandData
                    })
                })
                .catch((err)=>{
                    res.status(404).json({
                        status:400,
                        success:false,
                        message:"Internal Server Error",
                        error: err
                    })
                })
            }else{
                res.json({
                    status:200,
                    success:true,
                    message:"Brand already exists with the same name",
                    data:brandData
            })
            }
        })
        .catch((err)=>{
            res.status(404).json({
                status:400,
                success:false,
                message:"Internal Server Error",
                error: err
            })
        })
    }
}
all=(req,res)=>{
    let formData = req.body
    let limit = formData.limit
    let currentPage = formData.currentPage
    delete formData.limit  
    delete formData.currentPage
    BrandModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)
    .then((brandData)=>{
        if(brandData.length>0){
            res.json({
                status:200,
                success:true,
                message:"Brand Loaded",
                data:brandData
            })
        }else{
            res.json({
                status:400,
                success:false,
                message:"Data doesn't exist"
            })
        }
    })
    .catch({
        status:500,
        success:false,
        message:"Internal Server Error"
    })
}
module.exports ={brand, all}