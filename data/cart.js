export const cart = [];

export function addtoCart(quantity, productId){
    let machingItem;
  
       
  
  
  cart.forEach((cartItem)=>{
    if(productId == cartItem.productId){
      machingItem = cartItem;
    }
  });
  
  if(machingItem){
    machingItem.quantity += quantity;
  }else{
    cart.push({
      productId,
      quantity
    });
  }
  };