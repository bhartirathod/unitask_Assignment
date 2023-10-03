function getProductsWithPricing(products, pricing) {
  const productMap = new Map();

  for (const product of products) {
    productMap.set(product.sku, product);
  }
  
  for (const price of pricing) {
    const product = productMap.get(price.sku);
    if (product) {
      product.price = price.price;
    }
  }
  return Array.from(productMap.values());
}


const products = [
  {
    "id":1,
    "sku":"abc",
    "productName":"name 1",
    "category":1
  },
  {
    "id":2,
    "sku":"def",
    "productName":"name 2",
    "category":2
  },
  {
    "id":3,
    "sku":"ghi",
    "productName":"name 1",
    "category":2
  },
  {
    "id":4,
    "sku":"klm",
    "productName":"name 1",
    "category":3
  },
  {
    "id":5,
    "sku":"xyz",
    "productName":"name ",
    "category":1 
   }
];

const pricing = [
   {
     sku:"abc",
     price:10,
   },
   {
     sku:"def",
     price:20,
   },
   {
     sku:"ghi",
     price:30,
   },
   {
     sku:"klm",
     price:40,
   },
   {
     sku:"xyz",
     price:50,
   }
];

const result = getProductsWithPricing(products, pricing);
console.log(result);