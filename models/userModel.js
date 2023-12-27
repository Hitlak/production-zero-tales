const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'please add email'],
      trim: true,
      unqiue: true,
    },
    password: {
      type: String,
      required: [true, 'please add passwrod'],
      min: 6,
      max: 12,
    },
    role: {
      type: String,
      emun: ['user', 'admin'],
      default: 'user',
    },
    favourite: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
