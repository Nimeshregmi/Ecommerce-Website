import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
const Navbar = () => {
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
    <div className='flex flex-col md:flex-row md:justify-start items-center mb-3 py-1 justify-center shadow-xl'>
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
      <div onClick={togglecart} className="cart absolute right-0 md:,x-9 mx-6 top-4">
        <AiOutlineShoppingCart className=' cursor-pointer text-xl md:text-3xl' />
      </div>
      <div ref={ref} className="rounded-lg max-h-[95vh] z-50 overflow-scroll   md:w-96  px-8 top-10 right-0 absolute bg-pink-100 py-10 transform transition-transform translate-x-full">
        <div className='z-40'>
          <h2 className='font-black text-2xl   text-center mt-1' >Shopping Cart</h2>
          <span onClick={togglecart} className='fixed top-2 right-3 text-2xl mr-0 mt-0  cursor-pointer'><AiFillCloseCircle /></span>
          <hr />
        </div>

        <div className='mt-8'>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
          <ol className='list-decimal font-semibold'>
            <div className='flex bg-gray-50 px-3 rounded-lg  my-5'>
              <div className='w-2/3 font-semibold'> t-shirt : wear the code </div>
              <div className='flex  font-semibold items-center text-xl justify-between w-1/3'><AiOutlineMinusCircle className='cursor-pointer text-pink-900' /> 1 <AiOutlinePlusCircle className='cursor-pointer  text-pink-900' /></div>
            </div>
          </ol>
        </div>
        <div className="flex">
          <button className="flex my-7 mr-2 text-white items-center bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded-md text-lg"> <BsFillBagCheckFill className='m-1' /> CheckOut</button>
          <button className="flex my-7  mr-2  text-white items-center bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded-md text-lg"> <BsFillBagCheckFill className='m-1' /> Clear Cart</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
