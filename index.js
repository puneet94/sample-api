const express = require('express')
const path = require('path')
const roomRouter = require('./routes/rooms.js');
const dotenv = require('dotenv');

dotenv.config();
const cors =require("cors");
const bodyParser = require ('body-parser');
const PORT = process.env.PORT || 5001

console.log(process.env.TIMES);

const app = express().use(cors())
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use("/api/rooms", roomRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  
  // /api/rooms/roomslist
  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
