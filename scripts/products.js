export function getProducts(productId) {
   let matchingProduct;

   products.forEach((product) => {
      if(product.id === productId) {
         matchingProduct = product;
      }
   });

   return matchingProduct;
}

export const products = [
   {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: '../assets/products/bike1.png',
      name: 'All black mountain bike',
      priceCent: 120049
   },
   {
      id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      image: '../assets/products/bike2.png',
      name: 'A red mountain bike',
      priceCent: 145099
   },
   {
      id: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
      image: '../assets/products/bike3.png',
      name: 'Hardtail mountain geometry',
      priceCent: 149095
   },
   {
      id: '54e0eccd-8f36-462b-b68a-8182611d9add',
      image: '../assets/products/bike4.png',
      name: 'A premium matte black mountain bicycle',
      priceCent: 180059
   },
   {
      id: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
      image: '../assets/products/bike5.png',
      name: 'Road bicycle Sleek blue & black finish',
      priceCent: 155519
   },
   {
      id: '8c9c52b5-5a19-4bcb-a5d1-158a74287c53',
      image: '../assets/products/bike6.png',
      name: 'A stylish city commuter bicycle pastel blue color',
      priceCent: 94999
   },
   {
      id: 'c2a82c5e-aff4-435f-9975-517cfaba2ece',
      image: '../assets/products/bike7.png',
      name: 'Orange racing bike',
      priceCent: 159999
   },
   {
      id: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
      image: '../assets/products/bike8.png',
      name: 'A vintage-inspired city commuter bicycle',
      priceCent: 104959
   },
   {
      id: '77919bbe-0e56-475b-adde-4f24dfed3a04',
      image: '../assets/products/bike9.png',
      name: 'Electric city bicycle soft sage green color',
      priceCent: 125000
   },
   {
      id: '3fdfe8d6-9a15-4979-b459-585b0d0545b9',
      image: '../assets/products/bike10.png',
      name: 'A compact foldable urban bicycle',
      priceCent: 110099
   },
   {
      id: '58b4fc92-e98c-42aa-8c55-b6b79996769a',
      image: '../assets/products/bike11.png',
      name: 'premium carbon fiber road racing bicycle',
      priceCent: 169999
   },
   {
      id: '5968897c-4d27-4872-89f6-5bcb052746d7',
      image: '../assets/products/bike12.png',
      name: 'Limited-edition neon racing road bicycle',
      priceCent: 235099
   },
   {
      id: 'aad29d11-ea98-41ee-9285-b916638cac4a',
      image: '../assets/products/bike13.png',
      name: 'Futuristic aerodynamic concept racing bicycle',
      priceCent: 215999
   },
   {
      id: '04701903-bc79-49c6-bc11-1af7e3651358',
      image: '../assets/products/bike14.png',
      name: 'Rugged adventure trail bicycle',
      priceCent: 142499
   },
   {
      id: '901eb2ca-386d-432e-82f0-6fb1ee7bf969',
      image: '../assets/products/bike15.png',
      name: 'Heavy-duty cargo delivery bicycle',
      priceCent: 175049
   },
   {
      id: '82bb68d7-ebc9-476a-989c-c78a40ee5cd9',
      image: '../assets/products/bike16.png',
      name: 'Chrome metallic special edition',
      priceCent: 239999
   }
];