const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: true,
    },
    data: {
      type: Date,
      default: Date.now(),
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    sum: {
      type: Number,
    },
    day: {
      type: Number,
      min: 1,
      max: 31,
    },
    month: {
      type: Number,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      min: 2000,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

const Transaction = model('transaction', transactionSchema);

module.exports = {
  Transaction,
};
