import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://roudayna:roudayna@cluster0.92fzw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}