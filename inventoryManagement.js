// Write your code here
let products = ["laptop", "phone", "headphones", "monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProductName(name) {
    let newProduct = {
        name: name,
}

products.push(newProduct);
}

function updateProductName(position, newName) {
  products[position].name = newName;
}


function removeLastProduct() {
  products.pop(-1);
}


