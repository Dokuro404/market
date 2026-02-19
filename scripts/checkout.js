import { cart, deleteFromCart, saveToStorage, updateDeliveryOption } from "./cart.js";
import { products } from "./products.js";
import { deliveryOptions } from "./deliveryOptions.js";
import { renderPayment } from "./payment.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


function renderOrderSummary() {

   let checkOutHTML = '';

   function updateCartQuantity() {
      let cartQuantity = 0;

      cart.forEach((item) => {
         cartQuantity += item.quantity;
      });

      document.querySelector('.cart-items-noti').innerHTML = cartQuantity;
      document.querySelector('.check-out-items').innerHTML = cartQuantity + ' items';
   }

   cart.forEach((item) => {

      const productId = item.id;
      let matchingProduct;

      products.forEach((product) => {
         if(product.id === productId) {
            matchingProduct = product;
         }
      });

      const deliveryOptionId = item.deliveryOptionId;

      let deliveryOption;

      deliveryOptions.forEach((option) => {
         if(option.id === deliveryOptionId) {
            deliveryOption = option;
         }
      });

      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.dueDate, 'days');
      const dateFormat = deliveryDate.format('dddd - MMMM D');

      checkOutHTML += `
         <div class="check-out-item-container check-out-item-container-${matchingProduct.id}">
            <p class="delivery-due-date-heading">Delivery date: <span>${dateFormat}</span></p>
            <div class="items-and-info">
               <div class="item-img-container">
                  <img src="${matchingProduct.image}" alt="bicycle">
               </div>

               <div class="item-info-custom-container">
                  <p class="checkout-product-name">${matchingProduct.name}</p>
                  <p>$${(matchingProduct.priceCent / 100).toFixed(2)}</p>
                  <div>
                     <p>Quantity: <span class="order-quantity-${matchingProduct.id}"> ${item.quantity}</span><input type="number" placeholder="0" name="updating_quantity" min="1" max="100" class="update-quantity update-quantity-${matchingProduct.id}"></p>
                  </div>
                  <div>
                     <button class="btn btn-primary check-out-update-btn" data-product-id="${matchingProduct.id}">Update</button>
                     <button class="btn btn-secondary check-out-delete-btn" data-product-id="${matchingProduct.id}">Delete</button>
                  </div>
               </div>

               <div class="delivery-options-container">
                  <p class="delivery-option-heading">Choose a delivery option</p>
                  ${deliveryOptionsHTML(matchingProduct, item)}
               </div>
            </div>
         </div>
      `;

      updateCartQuantity();
   });

   function deliveryOptionsHTML(matchingProduct, item) {

      let HTML = '';

      deliveryOptions.forEach((deliveryOption) => {

         const today = dayjs();
         const deliveryDate = today.add(deliveryOption.dueDate, 'days');
         const dateFormat = deliveryDate.format('dddd - MMMM D');
         const deliveryPrice = deliveryOption.priceCents === 0 ? 'FREE' : `$${(deliveryOption.priceCents / 100).toFixed(2)} -`;

         const isChecked = deliveryOption.id === item.deliveryOptionId;

         HTML += `
            <div class="delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
               <input type="radio" ${isChecked ? 'checked' : ''} name="delivery_option_${matchingProduct.id}" title="delivery" value="9.99" class="delivery-option-input">
               <div>
                  <p>${dateFormat}</p>
                  <p>${deliveryPrice} Shipping</p>
               </div>
            </div>
         `
      });

      return HTML;
   }

   document.querySelector('.flex-container').innerHTML = checkOutHTML;

   document.querySelectorAll('.check-out-delete-btn').forEach((button) => {
      button.addEventListener('click', () => {
         const productId = button.dataset.productId;
         deleteFromCart(productId);
         
         const updateHTML = document.querySelector(`.check-out-item-container-${productId}`);
         
         updateHTML.remove();
         updateCartQuantity();
         renderPayment();
      });
   });

   document.querySelectorAll('.check-out-update-btn').forEach((button) => {
      button.addEventListener('click', () => {
         const productId = button.dataset.productId;
         const updateQuantity = document.querySelector(`.update-quantity-${productId}`);
         const orderQuantity = document.querySelector(`.order-quantity-${productId}`);

         if(button.innerHTML === 'Update') {
            button.innerText = 'Save';
            updateQuantity.classList.add('active');
         }else {
            button.innerText = 'Update';
            updateQuantity.classList.remove('active');
            const newQuantity = Number(updateQuantity.value);
            let matchingItem;
            
            cart.forEach((item) => {
               if(productId === item.id) {
                  matchingItem = item;
               }
            });

            if(matchingItem.quantity <= newQuantity) {
               matchingItem.quantity += newQuantity;
               orderQuantity.innerText = matchingItem.quantity;
            } else if (matchingItem.quantity >= newQuantity) {
               matchingItem.quantity = newQuantity;
               orderQuantity.innerText = matchingItem.quantity;
            }
            
            saveToStorage();
            updateCartQuantity();
         }
         
      });
   });

   document.querySelectorAll('.delivery-option').forEach((element) => {
      element.addEventListener('click', () => {
         const {productId, deliveryOptionId} = element.dataset;
         updateDeliveryOption(productId, deliveryOptionId);
         renderOrderSummary();
         renderPayment();
      });
   });
}

renderOrderSummary();
renderPayment();