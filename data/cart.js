export let cart = [
  {
  productId : '82bb68d7-ebc9-476a-989c-c78a40ee5cd9',
  quantity: 2
  },
  {
    productId : 'c2a82c5e-aff4-435f-9975-517cfaba2ece',
    quantity: 3
    },
    {
      productId : 'id1',
      quantity: 1
      }
];

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

 export function removeFromCart(productId){
    const newCart = [];
     cart.forEach((cartItem) =>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);

      }
     });
     cart = newCart;
     console.log(cart);
  };