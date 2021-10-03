const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    sum: {
      type: Number,
      required: true,
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
