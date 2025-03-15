add=(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Add data"
    })
}
product=(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Product of data"
    })
}
module.exports={add, product}