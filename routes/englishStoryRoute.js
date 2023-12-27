const express = require('express');
const {
  createEnglishStoryController,
  getAllEnglishStory,
} = require('../controllers/englishStoryController');
const { requireSingIn } = require('../controllers/userController');
//creating express Router
const router = express.Router();

//Create New English Story || POST route
router.post('/create-new-story', requireSingIn, createEnglishStoryController);

// get all Englisg Story || GET route
router.get('/get-all-english-story', getAllEnglishStory);

// export is very important
module.exports = router;
