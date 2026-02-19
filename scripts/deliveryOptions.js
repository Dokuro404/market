export const deliveryOptions = [
   {
      id: '1',
      dueDate: 7,
      priceCents: 0
   },
   {
      id: '2',
      dueDate: 4,
      priceCents: 499
   },
   {
      id: '3',
      dueDate: 1,
      priceCents: 999
   }
];

export function getDeliveryOption(deliveryOptionId) {
   let deliveryOption;

   deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId) {
         deliveryOption = option;
      }
   });
   return deliveryOption || deliveryOption[0];
}