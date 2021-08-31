import Product from "./models/product";
import InventoryItem from "./models/inventory";

const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1 },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  if (array) {
    let total = 0;
    for (let index = 0; index < array.length; index++) {
      //index = i
      total += array[index].product.price * array[index].quantity;
    }
    return total;
  } else {
    return 0;
  }
};
console.log(calcInventoryValue(inventory));

