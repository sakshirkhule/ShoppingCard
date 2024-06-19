import {useEffect,useState} from 'react'
import '../App.css'

function CartList({cart}) {


  const[CART,setCART]=useState([])

  useEffect(()=>{
    setCART(cart)
  },[cart])
  return (
    <div>
      {
        CART?.map((cartItem, cartIndex)  => {
          return(
            <div className='Receipt'>
              <img className='img' src={cartItem.image} width={70}/>
              <span></span>
              
              <span>{ cartItem.name }</span> 
              <span></span>
              <button className='decrease'
               onClick={()=>{
                const _CART= CART.map((item,index)=>{
                 return cartIndex ===index? {...item,quantity:item.quantity>0 ?item.quantity-1:0}:item
                })
                setCART(_CART)
              }}
              >-</button>
                 <span></span>
               <span>{cartItem.quantity}</span>
               <button  className='increase'
                  onClick={()=>{
                     const _CART= CART.map((item,index)=>{
                      return cartIndex ===index? {...item,quantity:item.quantity+1}:item
                     })
                     setCART(_CART)
                  }}
               >+</button>
              <span>Rs.{cartItem.Price*cartItem.quantity}</span>
              

            </div>
          )
        })
      }

      <p className='Total'> Total <span></span>
        {
          CART.map(item=>item.Price * item.quantity).reduce((total,value) => total+value ,0)
        }
      </p>
    </div>
  )
}

export default CartList
