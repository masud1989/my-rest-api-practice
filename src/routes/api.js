const express = require('express');
const { HelloGet, HelloPost } = require('../controllers/HelloController');
const { TokenIssue } = require('../controllers/TokenIssueController');
const { insertData, ReadData, UpdateProduct, DeleteProduct } = require('../controllers/ProductsController');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');
const router = express.Router();


// Routes 
router.get('/hello-get', HelloGet);
router.post('/hello-post', HelloPost);

router.get('/TokenIssue', TokenIssue);
router.post('/insert-product',TokenVerifyMiddleware, insertData);
router.get('/products',TokenVerifyMiddleware, ReadData);
router.post('/update/:id',TokenVerifyMiddleware, UpdateProduct);
router.post('/update/:id',TokenVerifyMiddleware, UpdateProduct);
router.get('/delete/:id',TokenVerifyMiddleware, DeleteProduct);

module.exports = router;