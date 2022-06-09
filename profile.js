
//get Data from local storge
let get_name = localStorage.getItem('local-username');
let get_email = localStorage.getItem('locale-email');
let products = JSON.parse(localStorage.getItem('products'))|| productsDB;
let myproducts = products.filter((i )=> i.isMe==="Y");
console.log("products", myproducts.length);
//varibles 
let user_dom2= document.getElementById('username');
let userEmailDom = document.getElementById('email');
let productslength = document.querySelector('#productslength span');


user_dom2.innerHTML= get_name;
userEmailDom.innerHTML= get_email;

if (productslength != 0 ){
productslength.innerHTML = myproducts.length ;
}
else 
{
    productslength.remove();
}

