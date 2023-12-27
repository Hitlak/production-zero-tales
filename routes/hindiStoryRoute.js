const express = require('express');
const {
  createHindiStoryController,
  getAllHindiStory,
} = require('../controllers/hindiStoryController');
const { requireSingIn } = require('../controllers/userController');

//router
const router = express.Router();

// Create Hindi Story ||
router.post('/create-new-story', requireSingIn, createHindiStoryController);

//get all hindi story || GET
router.get('/get-all-hindi-story', getAllHindiStory);

//export
module.exports = router;
