import Product from "./models/product"; //use this again in inventory

const products: Product[] = [
    {
        name: "Chicken",
        price: 6
    },
    {
        name: "Rice",
        price: 1
    },
    {
        name: "Steak",
        price: 9
    },
]

const calcAverageProductPrice = (array: Product[]): number => {
    let total = 0;
    array.forEach((item) => {
        total += item.price;
    })
    return total / array.length;
}
console.log(calcAverageProductPrice(products));
