let products = JSON.parse(localStorage.getItem("products"));

let productID = localStorage.getItem('productID');
let itemDom = document.querySelector('.itemDetails')

let productDetails = products.find((item) =>item.id == productID)
console.log(productDetails);


itemDom.innerHTML=
`      <img src="${productDetails.imgUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>${productDetails.size}</span> <br>  
<span>quantity : ${productDetails.qty}</span>   <br>
<button onclick= "editProduct(${productID})"> Edit Product </button>  




`
//edit Product

function editProduct(id){
    // console.log("id",id);
    localStorage.setItem("editProduct",id);
    window.location = "editProduct.html";
  }