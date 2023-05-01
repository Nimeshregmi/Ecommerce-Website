// import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { unstable_revalidateTag } from 'next/server'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [sumTotal, setsumTotal] = useState(0);

  const addtocart = (itemcode, price, qty, name, size, variant) => {
    let newCart=cart;
    if(itemcode in cart){
      newCart[itemcode].qty =cart[itemcode].qty+qty;  
    }
    else{
      newCart[itemcode] ={qty:1,price,name,size,variant};
    }
    setCart(newCart);
    saveCart(newCart)
  };
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
