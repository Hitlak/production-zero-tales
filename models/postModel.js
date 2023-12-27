const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title Is Required'],
    },
    body: {
      type: String,
      required: [true, 'Please Enter Story'],
    },
    img: {
      type: String,
      required: true,
    },
    moral: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Tag',
      },
    ],
    court: {
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
