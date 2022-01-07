const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
router.post('/', auth, multer, newsController.createNews);
router.put('/:id', auth, multer, newsController.updateNews);
router.delete('/:id', auth, newsController.deleteNews);
router.get('/:id', newsController.getOneNews);
router.get('/', newsController.getAllNews);

module.exports = router;