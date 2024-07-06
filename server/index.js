const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const mongoose = require("mongoose")
require("dotenv").config();
const app = express()

app.use(cors())
app.use(express.json())

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

const uri = "mongodb+srv://saik64757:<password>@chatappdataset1.ctrjihu.mongodb.net/?appName=chatappdataSet1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on port=${process.env.PORT}`)
})

server.on("error",(err)=>{
    console.log(`Error Occured ${err}`)
})