const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGO_DB

mongoose.connect(URL)
  .then(() => {
    console.log('Databases conected')
  })
  .catch(err => {
    console.log(err)
  })
