import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://kachabazar:pjsWv7FsQ1tbMa6xkachabazarfsdfsdaf@cluster0-shard-00-00.zlt6h.mongodb.net:27017,cluster0-shard-00-01.zlt6h.mongodb.net:27017,cluster0-shard-00-02.zlt6h.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-a64arb-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log(`mongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
