import Products from "./models/Product";


export const products: Products[] = [
    {name: "PlayStation 5", price: 700},
     {name: "i-Phone 14",price: 1400 }, 
     {name: "Sp-404 mk2", price: 700},
    {name:"Mpc 200xl", price: 600}];

   export const calcAverageProductPrice = (array:Products[]):number => {
    const totalPrice = array.reduce((prev, cv) => {
           return  prev + cv.price;
        }, 0); 
        if(!array){
         return 0
        } else {
       return totalPrice / array.length
        }
    }

    console.log(calcAverageProductPrice(products));
const resultOfAverageProductPrice = calcAverageProductPrice(products);
console.log(resultOfAverageProductPrice);

