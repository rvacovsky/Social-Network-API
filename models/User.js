const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const validator = require('validator');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false
      }
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friendss on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;

});

const User = model('User', UserSchema);

module.exports = User;
