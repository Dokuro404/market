export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// if(!cart) {
//    cart = [];
// }

export function saveToStorage() {
   localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
   const quantity = Number(document.getElementById(`item-quantity-${productId}`).value);

   let matchingItem;

   cart.forEach((item) => {
      if(productId === item.id) {
         matchingItem = item;
      }
   });

   if(matchingItem) {
      matchingItem.quantity += quantity;
   }else {
      cart.push({
         id: productId,
         quantity: quantity,
         deliveryOptionId: '1'
      });
   }

   saveToStorage();
}

export function deleteFromCart(productId) {
   const newCart = [];

   cart.forEach((item) => {
      if(item.id !== productId) {
         newCart.push(item);
      }
   });

   cart = newCart;

   saveToStorage();
}

export function updateDeliveryOption(id, deliveryOptionId) {
   let matchingItem;

   cart.forEach((item) => {
      if(id === item.id) {
         matchingItem = item;
      }
   });

   matchingItem.deliveryOptionId = deliveryOptionId;

   saveToStorage();
}