const CategoryModel = require("./CategoryModel")
const category = (req,res)=>{
    let validation=""
    if(!req.body.categoryName){
        validation+="Category Name is required, "
    }
    if(!req.body.description){
        validation+="Description is required, "
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false, 
            message:validation
        })
    }else{
        CategoryModel.findOne({categoryName:req.body.categoryName})
        .then(async(categoryData)=>{
            if(!categoryData){
                let categoryObj = new CategoryModel()
                let total = await CategoryModel.countDocuments().exec()
                categoryObj.autoId = total+1
                categoryObj.categoryName = req.body.categoryName
                categoryObj.description = req.body.description
                categoryObj.save()
                .then((categoryData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Category Added",
                        data: categoryData
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
                    message:"Category already exists with the same name",
                    data:categoryData
            })}
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
    CategoryModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)
    .then((categoryData)=>{
        if(categoryData.length>0){
            res.json({
                status:200,
                success:true,
                message:"Category Loaded",
                data:categoryData
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
        message:"Internal server Error"
    })
}

module.exports={category, all}
