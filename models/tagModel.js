const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      required: true,
      max: 25,
    },
    postId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tag', tagSchema);
