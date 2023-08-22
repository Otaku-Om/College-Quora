const mongoose = require('mongoose')

const url = "mongodb://saxenaom12:NaRuTo12@ac-lsiy1rp-shard-00-00.lckeopq.mongodb.net:27017,ac-lsiy1rp-shard-00-01.lckeopq.mongodb.net:27017,ac-lsiy1rp-shard-00-02.lckeopq.mongodb.net:27017/?ssl=true&replicaSet=atlas-2j2wry-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () =>{
   mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }).then(() => {
      console.log("MongoDB connected successfully")
   }).catch((error) => console.log("Error: ", error))
}