import { cart, addToCart } from "./cart.js";
import { products } from "./products.js";

let productsHTML = '';

products.forEach((product) => {
   productsHTML +=`
      <div class="product-container">
         <div class="product-img-container">
            <img src="${product.image}" alt="bicycle">
         </div>
         <div class="product-name-container">
            <p>${product.name}</p>
         </div>
         <div class="product-price-container">
            <p>$${(product.priceCent / 100).toFixed(2)}</p>
         </div>
         <div class="product-quantity-container">
            <select name="quantity" id="item-quantity-${product.id}" title="Quantity" class="product-quantity">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
            </select>
         </div>
         <div class="product-checkmark-container product-checkmark-container-${product.id}">
            <img src="../assets/checkmark.png" alt="check-mark"><p>Added</p>
         </div>
         <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
      </div>
   `;

});

document.querySelector('.products-grid-section').innerHTML = productsHTML;
updateCartQuantity();

function updateCartQuantity() {
   let cartQuantity = 0;

   cart.forEach((item) => {
      cartQuantity += item.quantity;
   });

   document.querySelector('.cart-items-noti').innerHTML = cartQuantity;
}

document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
   button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const checkMark = document.querySelector(`.product-checkmark-container-${productId}`);

      checkMark.classList.add('opacity-1');

      setTimeout(() => {
         checkMark.classList.remove('opacity-1');
      }, 3000);

      addToCart(productId);
      updateCartQuantity();

   });
});