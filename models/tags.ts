import mongoose, { Document,Schema } from "mongoose";


// Define the interface for the document
export interface ITags extends Document {
  // id: string;
  // rate: number;
  // interval: number;
  // repetitionNumber: number;
  // easinessFactor: number;
  // ques: string;
  // ans?: string; // Optional field
  // soft_delete: boolean;
  id: string;
  name: string;
  soft_delete: boolean
}

const TagsSchema = new mongoose.Schema<ITags>({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  soft_delete:{
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
);




const Tags = mongoose.modelNames().includes('tags')
  ? mongoose.model('tags')
  : mongoose.model<ITags>('tags', TagsSchema);


export default Tags;
