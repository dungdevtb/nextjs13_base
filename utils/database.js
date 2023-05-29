import mongoose from "mongoose";

let isConnectDB = false; //theo dõi trạng thái kết nối

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //tránh console.log warning ,nên đặt strictQuery

  if (isConnectDB) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
