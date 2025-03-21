const CategoryModel = require("./CategoryModel")
const category = (req,res)=>{
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

module.exports={category}
