const mongoose = require('mongoose');

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return handler(req, res);
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      return handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error connecting to database' });
    }
  }
};

module.exports = connectDb;

// const mongoose = require('mongoose');

// const connectDb = (handler) => async (req, res) => {
//   if (mongoose.connection.readyState == 1) {
//     return handler(req, res);
//   }
//   else{
//       const mon=await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true });
//       return handler(req, res);
//       }
// };

// module.exports = connectDb;


// import mongoose from "mongoose";

// const  connectDb= handeler=> async (req,res)=>{
//     if(mongoose.connection[0].readyState){
//         return handeler(req,res);
//     }
//     await mongoose.connect(process.env.MONGO_URI)
//     return handeler(req,res);

// };

// export default connectDb;