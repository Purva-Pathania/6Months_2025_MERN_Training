const CategoryController = require("../apis/category/CategoryController")
const brandController = require("../apis/brand/brandController")
const productController = require("../apis/product/productController")
const router = require("express").Router()
const multer = require("multer")
router.post("/category/add", CategoryController.add)
const brandStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./server/public/brand_images")
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname)
    }
})
const brandUpload = multer({storage: brandStorage})
router.post("/brand/add", brandUpload.single("image"), brandController.add)
const productStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./server/public/product_images")
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname)
    }
})
const productUpload = multer({storage: productStorage})
router.post("/product/add", productUpload.single("image"), productController.add)
router.post("/category/all", CategoryController.all)
router.post("/brand/all", brandController.all)
router.post("/product/all", productController.all)
router.post("/brand", brandController.single)
router.post("/brand/delete", brandController.deleteBrand)
router.post("/brand/update", brandController.update)
router.post("/brand/status", brandController.changeStatus)
router.post("/category", CategoryController.single)
router.post("/category/delete", CategoryController.deleteCategory)
router.post("/category/update", CategoryController.update)
router.post("/category/status", CategoryController.changeStatus)
router.post("/product", productController.single)
router.post("/product/delete", productController.deleteProduct)
router.post("/product/update", productController.update)
router.post("/product/status", productController.changeStatus)
module.exports=router