const CategoryController = require("../apis/category/CategoryController")
const brandController = require("../apis/brand/brandController")
const productController = require("../apis/product/productController")
const router = require("express").Router()
router.post("/category/add", CategoryController.category)
router.post("/brand", brandController.brand)
router.post("/product", productController.product)
module.exports=router