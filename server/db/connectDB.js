import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.DDATABASE_CONNECTION_STRING
    );
    console.log(`[Database]: Connected Successfully`, connect.connection.host);
  } catch (error) {
    console.error(`Error connecting to database, `, error);
  }
};

export default connectDB;
