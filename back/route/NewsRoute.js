const express = require('express');
const router=express.Router();
const newsController=require('../controllers/NewsController');
const auth=require('../middleware/auth');

router.post('/' , auth, newsController.createNews);
router.put('/:id' ,  auth,newsController.updateNews);
router.delete('/:id' , auth, newsController.deleteNews);
router.get('/:id' , newsController.getOneNews);
router.get('/' , newsController.getAllNews);

module.exports = router;