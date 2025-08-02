import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unqiue: true },
  email: { type: String, required: true, unqiue: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 3 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
