import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { MdRemoveShoppingCart,MdAccountCircle } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
const Navbar = ({ cart, addtocart, removeFromcart, clearCart, sumTotal }) => {
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
      ref.current.classList.add('right-5')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.remove('right-5')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center mb-4 py-2 justify-center top-0 bg-white z-10 sticky shadow-lg'>
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt='Background image' width={200} height={40} />
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-3 font-bold md:text-xl'>
          <Link legacyBehavior={true} href={"/hoodies"}><a><li>Hoodie</li></a></Link>
          <Link legacyBehavior={true} href={"/stickers"}><a><li>Stickers</li></a></Link>
          <Link legacyBehavior={true} href={"/mugs"}><a><li>Mugs</li></a></Link>
          <Link legacyBehavior={true} href={"/tshirt"}><a><li>Tshirt</li></a></Link>
        </ul>
      </div>
      <div  className="cart absolute right-0 md:,x-9 mx-6 flex top-4">
        <Link href={'/login'}><MdAccountCircle className=' cursor-pointer text-xl md:text-3xl mx-3'/></Link>
        <AiOutlineShoppingCart onClick={togglecart} className=' cursor-pointer text-xl md:text-3xl' />
      </div>
      <div ref={ref} className="rounded-lg max-h-[95vh] z-50 overflow-scroll   md:w-96  px-8 top-10 right-0 absolute bg-pink-100 py-10 transform transition-transform translate-x-full">
        <div className='z-40'>
          <h2 className='font-black text-2xl   text-center mt-1' >Shopping Cart</h2>
          <span onClick={togglecart} className='absolute top-0 right-0 text-2xl mr-0 mt-0  cursor-pointer'><AiFillCloseCircle /></span>
          <hr />
        </div>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
                <div className='w-2/3 font-semibold'> {cart[k].name} </div>
                <div className='flex  font-semibold items-center text-xl justify-between w-1/3'>< AiOutlineMinusCircle onClick={() => { removeFromcart(k, cart[k].price, 1, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-900' />  {cart[k].qty} <AiOutlinePlusCircle onClick={() => { addtocart(k, cart[k].price, 1, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer  text-pink-900' /></div>
              </div>
            </li>
          })}
        </ol>
        <span className='font-bold text-xl mx-auto my-2'>SubTotal : ₹{sumTotal}</span>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex my-7 mr-2 text-white items-center bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded-md text-lg"> <BsFillBagCheckFill className='m-1' /> CheckOut</button></Link>
          <button onClick={clearCart} className="flex my-7  mr-2  text-white items-center bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded-md text-lg"> <MdRemoveShoppingCart className='m-1' /> Clear Cart</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
