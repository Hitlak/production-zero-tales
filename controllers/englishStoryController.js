const englishStoryModel = require('../models/englishStoryModel');

// create new post
const createEnglishStoryController = async (req, res) => {
  try {
    const { title, body, img, moral, tag, court, meanings } = req.body;
    //validate
    if (!title || !body || !img || !moral) {
      return res.status(500).send({
        success: false,
        message: 'All Feilds Are Required',
      });
    }
    const englishStory = await englishStoryModel({
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
      message: 'English Created Successfully ',
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
const getAllEnglishStory = async (req, res) => {
  try {
    const englishStories = await englishStoryModel
      .find()
      .populate('postedBy', '_id name')
      .sort({ createdAt: -1 }); // this is used to show latest post
    res.status(200).send({
      success: true,
      message: 'All Post Data',
      englishStories,
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
module.exports = { createEnglishStoryController, getAllEnglishStory };
