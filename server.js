const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const items = require('./routes/api/items')

const port = process.env.PORT || 3001;

app.use(express.json()); //bodyparser

//db
const db = process.env.MONGO_URI;

//connect
const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb, connecting people")
  } catch (error) {
    console.log(error)
  }
}

connect();
mongoose.set('useFindAndModify', false);
//routes
app.use('/api/items', items)

app.listen(port, ()=>console.log(`Ready on ${port}`))