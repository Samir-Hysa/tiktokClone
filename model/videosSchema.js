import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
  url: String,
  description: String,
  channel: String,
  likes: String,
  messages: String,
  shares: String,
});

// Collection inside the database
export default mongoose.model("Ciao", VideoSchema);
