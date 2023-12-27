const mongoose = require('mongoose');

const hindiStoryModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    moral: {
      type: String,
      required: true,
    },
    tag: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Tag',
      },
    ],
    court: String,
    meanings: [
      {
        word: String,
        meaning: String,
      },
    ],
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('HindiStory', hindiStoryModel);
