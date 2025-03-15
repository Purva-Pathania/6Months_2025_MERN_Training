const CategoryController = require("../apis/category/CategoryController")
const router = require("express").Router()
router.post("/category/add", CategoryController.add)
router.post("/category/product", CategoryController.product)
module.exports=router