import mongoose, { Document,Schema } from "mongoose";


// Define the interface for the document
export interface INotes extends Document {
  id: string;
  rate: number;
  interval: number;
  repetitionNumber: number;
  easinessFactor: number;
  ques: string;
  ans?: string; // Optional field
  soft_delete: boolean;
  tags?: string[]
}

const NotesSchema = new mongoose.Schema<INotes>({
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
  },
  soft_delete:{
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
);




const Notes = mongoose.modelNames().includes('notes')
  ? mongoose.model('notes')
  : mongoose.model<INotes>('notes', NotesSchema);


export default Notes;
