import { cart } from "./cart.js";
import { getProducts } from "./products.js";
import { getDeliveryOption } from "./deliveryOptions.js";

export function renderPayment() {
   let productPriceCents = 0;
   let ShippingPriceCents = 0;

   cart.forEach((item) => {
      const product = getProducts(item.id);
      productPriceCents += (product.priceCent * item.quantity) / 100;

      const deliveryOption = getDeliveryOption(item.deliveryOptionId);
      ShippingPriceCents += (deliveryOption.priceCents / 100);
   });

   const totalBeforeTax = productPriceCents + ShippingPriceCents;
   const taxCents = (totalBeforeTax * 0.1);
   const totalCents = (totalBeforeTax + taxCents);
   
   const paymentHTML = `
      <h5 class="order-summary-heading">Order Summary</h5>
      <div class="summary-block">
         <p>items(<span>0</span>)</p>
         <p>$${(productPriceCents).toFixed(2)}</p>
      </div>
      <div class="summary-block">
         <p>shipping & handling</p>
         <p>$${(ShippingPriceCents).toFixed(2)}</p>
      </div>
      <div class="summary-block">
         <p>total before tax</p>
         <p>$${(totalBeforeTax).toFixed(2)}</p>
      </div>
      <div class="summary-block">
         <p>estimated tax(10%):</p>
         <p>$${(taxCents).toFixed(2)}</p>
      </div>
      <div class="summary-block summary-total-block">
         <p>Order Total:</p>
         <p>$${(totalCents).toFixed(2)}</p>
      </div>
      <button class="btn btn-primary">Place your order</button>
   `;

   document.querySelector('.order-summary-section').innerHTML = paymentHTML;
}