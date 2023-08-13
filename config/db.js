const mongoose = require('mongoose')

const connectDB =async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongoDB connected: ${conn.connection.host}`)
}

// mongoose.set('strickQuery', true)

module.exports = connectDB

// const { MongoClient } = require('mongodb')

// module.exports ={
//     connectDb () => {
//         MongoClient.connect('mongodb://localhost:5000/api/ideas')
//         .then((client) =>{
//             dbConnect = client.db()
//         })
//         .catch(err => {
//             console.log(err);
//         })

//     }
//     getDb: () => {}
// }
