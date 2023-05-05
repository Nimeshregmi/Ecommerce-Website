// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"

const handler = async (req,res)=>{
    let Products=await Product.findById();
    res.status(200).json({ Products })
}
export default connectDb(handler)