import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    default: 0
  },
  interval: {
    type: Number,
    default: 0
  },
  repetitionNumber: {
    type: Number,
    default: 0
  },
  easinessFactor: {
    type: Number,
    default: -100
  },
  ques: {
    type: String,
    required: true
  },
  ans: {
    type: String,
  }
},
  { timestamps: true }
);


const Notes = mongoose.modelNames().includes('notes')
  ? mongoose.model('notes')
  : mongoose.model('notes', NotesSchema);

export default Notes;
