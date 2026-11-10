import "dotenv/config";
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.DB_URI);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await connectToMongoDB();

const db = connectedClient.db("ph-car-wash-system");
const usersCollection = db.collection("users");
const servicesCollection = db.collection("services");
const bookingsCollection = db.collection("bookings");
const branchesCollection = db.collection("branches");

// Services API
app.get("/services", async (req, res) => {
  const result = await servicesCollection.find({}).toArray();
  res.send(result);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
