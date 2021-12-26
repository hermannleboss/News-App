const express = require('express');
const router=express.Router();
const newsController=require('../controllers/NewsController');

router.post('/' , newsController.createNews);
router.put('/:id' , newsController.updateNews);
router.delete('/:id' , newsController.deleteNews);
router.get('/:id' , newsController.getOneNews);
router.get('/' , newsController.getAllNews);

module.exports = router;