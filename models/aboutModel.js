const mongoose = require('mongoose');

const aboutModel = new mongoose.Schema(
  {
    headerEng: {
      type: String,
      required: true,
    },
    subHeaderEng: {
      type: String,
      required: true,
    },
    bodyEng: [
      {
        title: String,
        desc: String,
      },
    ],
    headerHin: {
      type: String,
      required: true,
    },
    subHeaderHin: {
      type: String,
      required: true,
    },
    bodyHin: [
      {
        title: String,
        desc: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Export
module.exports = mongoose.model('About', aboutModel);
