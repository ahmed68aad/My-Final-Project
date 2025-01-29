import mongoose from "mongoose";

export const connectdb =async () => {
    await mongoose.connect('mongodb+srv://ahmed68aad:68aad_261212@cluster0.s1crp.mongodb.net/final-project').then(()=> console.log("DB connected"))
}