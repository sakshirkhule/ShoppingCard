import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import '../App.css'

function ProductListing({ product,addToCart }) {
  
  return (
    <div className='flex'>

      {
            product.map((productItem,productIndex)=>{

              return(
                <div style={{width:'50%'}}>
                  <div className='product-item'>
                    <img src={productItem.image} width='50%'/>
                    <p>{productItem.name} | {productItem.category}</p>
                    <p>Rs. {productItem.Price} /-</p>
                    <button  className='button'onClick={() => addToCart(productItem)}>Add to Cart</button>
                  </div>

                 
                </div>
              )

            })

      }
    </div>
  );
}

export default ProductListing;
