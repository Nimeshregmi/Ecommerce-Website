 import { Schema, model, connect } from 'mongoose';
const mongoose=require('mongoose');

const productSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  disc: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
  availableqty: { type: Number, required: true },
}, { timestamps: true });
// mongoose.model.Product||
const Product = mongoose.model('Product', productSchema);

connect('mongodb://localhost:27017/codeswear', { useNewUrlParser: true });

export default Product;
// const mongoose = require('mongoose');


// const productschema=new mongoose.Schema({
//     title:{type:String ,required:true},
//     slug:{type:String ,required:true,unique:true},
//     disc:{type:String ,required:true},
//     img:{type:String ,required:true},
//     category:{type:String ,required:true},
//     size:{type:String },
//     color:{type:String },
//     price:{type:Number ,required:true},
//     availableqty:{type:Number ,required:true},
// },{timestamps:true});

// mongoose.model('Product', productschema);

// mongoose.connect('mongodb://localhost:27017/codeswear', { useNewUrlParser: true });

// const prod = mongoose.model('Product');
// export default prod;

