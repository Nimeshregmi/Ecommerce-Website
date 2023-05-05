import React from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Link from 'next/link';

const Checkout = ({ cart, addtocart, removeFromcart, clearCart, sumTotal }) => {
  return (
    <div className='container m-auto px-3 md:px-16'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-bold  text-xl'>1. Delivery Details</h2>
      <div className="mx-auto flex md:m-7 my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 md:m-7 w-full">
        <div className=" mb-4">
          <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea name="Address" id="Address" cols="2" rows="1" className="w-[87vw] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className="mx-auto flex md:m-7 my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">phone</label>
            <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">city</label>
            <input type="email" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex md:m-7 my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">state</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="Pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="email" id="Pincode" name="Pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className='font-bold   text-xl'>2. Review Cart Item</h2>
      <div className="rounded-lg md:w-[80vw] bg-pink-100  z-50  px-8 py-10">
        <div className='z-40'>
          <h2 className='font-black text-2xl mb-5   text-center mt-1' >Shopping Cart</h2>
          <hr />
        </div>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='flex px-3 rounded-lg  my-5'>
                <div className='w-2/3 font-semibold'> {cart[k].name} </div>
                <div className='flex  font-semibold items-center text-xl justify-between w-1/3 mr-0 md:w-1/12'>< AiOutlineMinusCircle onClick={() => { removeFromcart(k, cart[k].price, 1, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-900' />  {cart[k].qty} <AiOutlinePlusCircle onClick={() => { addtocart(k, cart[k].price, 1, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer  text-pink-900 ' /></div>
              </div>
            </li>
          })}
        </ol>
        <span className='font-bold text-xl'>SubTotal : ₹{sumTotal}</span>
      </div>
      <Link href={'/checkout'}><button className="flex my-7 mr-2 text-white items-center bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded-md text-lg"> <BsFillBagCheckFill className='m-1' /> Pay ₹{sumTotal}</button></Link>
    </div>
  )
}

export default Checkout
