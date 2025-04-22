const BrandModel = require("./brandModel")
const { uploadImg } = require("../../utilities/helper")
const add= (req,res)=>{
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
        if(!req.file){
            validation+="Image is required"
        }
    }else{
        BrandModel.findOne({brandName:req.body.brandName})
        .then(async(brandData)=>{
            if(!brandData){
                let brandObj = new BrandModel()
                let total=await BrandModel.countDocuments().exec()
                brandObj.autoId = total+1
                brandObj.brandName = req.body.brandName
                //brandObj.image = "brand_images/" + req.file?.filename
                try{
                    let url=await uploadImg(req.file.buffer)
                    brandObj.image=url
                }
                catch(err){
                    res.json({
                        status:500,
                        success:false,
                        message:"error while uploading image!!"
                    })
                }
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
single=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        BrandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Brand Found"
                })
            }else{
                res.json({
                    status:200,
                    success:true,
                    message:"Brand Found",
                    data:brandData
                })
            }
        }).catch((err=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        }))
    }
}
deleteBrand=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        BrandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Brand doesn't exist"
                })
            }else{
                BrandModel.deleteOne({_id:formData._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Brand Deleted Successfully!!!"
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
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
update=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        BrandModel.findOne({_id:formData._id})
        .then(async(brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data doesn't exist",
                })
            }else{
                if(!!formData.brandName){
                    brandData.brandName=formData.brandName
                }
                if(!!req.file){
                    try{
                        let url=await uploadImg(req.file.buffer)
                        brandData.image=url
                    }
                    catch(err){
                        res.json({
                            status:500,
                            success:false,
                            message:"error while uploading image"
                        })
                    }
                }
                brandData.save()
                .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Brand Data updated successfully",
                        data:brandData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:true,
                        message:"Internal Server Error",
                        error:err
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:true,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
changeStatus=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        BrandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Brand data not found"
                })
            }else{
                brandData.status=!brandData.status
                brandData.save()
                .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Brand Status updated Successfully!!!",
                        data:brandData
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
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
module.exports ={add, all, single, deleteBrand, update, changeStatus}