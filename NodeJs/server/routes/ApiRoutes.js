const CategoryController = require("../apis/category/CategoryController")
const brandController = require("../apis/brand/brandController")
const productController = require("../apis/product/productController")
const router = require("express").Router()
router.post("/category", CategoryController.category)
router.post("/brand", brandController.brand)
router.post("/product", productController.product)
router.post("/category/all", CategoryController.all)
router.post("/brand/all", brandController.all)
router.post("/product/all", productController.all)
module.exports=router