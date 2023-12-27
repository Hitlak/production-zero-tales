const hindiStoryModel = require('../models/hindiStoryModel');

// create new post
const createHindiStoryController = async (req, res) => {
  try {
    const { title, body, img, moral, tag, court, meanings } = req.body;
    //validate
    if (!title || !body || !img || !moral) {
      return res.status(500).send({
        success: false,
        message: 'All Feilds Are Required',
      });
    }
    const hindiStory = await hindiStoryModel({
      title,
      body,
      img,
      moral,
      tag,
      court,
      meanings,
      postedBy: req.auth._id,
    }).save();
    res.status(201).send({
      success: true,
      message: 'Post Created Successfully ',
      hindiStory,
    });
    console.log(req);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in create post API',
      error: console.log(error),
    });
  }
};

// get all hindi story
const getAllHindiStory = async (req, res) => {
  try {
    const hindiStories = await hindiStoryModel
      .find()
      .populate('postedBy', '_id name')
      .sort({ createdAt: -1 }); // this is used to show latest post
    res.status(200).send({
      success: true,
      message: 'All Post Data',
      hindiStories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error getting all data',
    });
  }
};

// exports
module.exports = { createHindiStoryController, getAllHindiStory };
