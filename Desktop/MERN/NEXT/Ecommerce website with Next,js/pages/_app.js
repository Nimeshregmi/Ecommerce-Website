// import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { unstable_revalidateTag } from 'next/server'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [sumTotal, setsumTotal] = useState(0);
  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }

    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
    
  }, [])

  const saveCart = (mycard) => {
    localStorage.setItem('cart', JSON.stringify(mycard));
    let subt = 0;
    let keys = Object.keys(mycard);
    for (let i = 0; i < keys.length; i++) {
      subt += mycard[keys[i]].price * mycard[keys[i]].qty;
    }
    setsumTotal(subt);
  };
  const addtocart = (itemcode, price, qty, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    }
    else {
      newCart[itemcode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart)
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeFromcart = (itemcode, price, qty, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if (typeof newCart[itemcode] !== 'undefined' && newCart[itemcode].qty <= 0) {
      delete newCart[itemcode];
    }
    setCart(newCart);
    saveCart(newCart)
  };

  return <>
    <Navbar key={saveCart} cart={cart} addtocart={addtocart} removeFromcart={removeFromcart} clearCart={clearCart} sumTotal={sumTotal} />
    <Component cart={cart} addtocart={addtocart} removeFromcart={removeFromcart} clearCart={clearCart} sumTotal={sumTotal} {...pageProps} />
    <Footer />
  </>
}
