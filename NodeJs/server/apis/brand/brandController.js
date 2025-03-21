const BrandModel = require("./brandModel")
const brand= (req,res)=>{
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
module.exports ={brand}