const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

// Create Product - Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// exports.createProduct = async (req, res, next) => {
//   const product = await Product.create(req.body);
//   res.status(201).json({
//     success: true,
//     product,
//   });
// };

//Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
  const products = await apiFeature.query;
  // const products = await Product.find();
  res.status(200).json({
    success: true,
    products 
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // After adding Middleware for Error in middleware and app.use()
  if (!product) {
    // next is a call back function.
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
    productCount
  });
  
  // if(!product){
  //    return res.status(500).json({
  //       success: false,
  //       message: "Product not found"
  //    })
  // }
});

// Update Product - Admin
exports.updateProduct = catchAsyncErrors (async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindandModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Successfully Deleted!",
  });
});
