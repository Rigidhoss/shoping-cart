let badgeDom = document.querySelector(".badge");
let cartProductsDivDom = document.querySelector(".carts-products div");
let cartProductsMenu = document.querySelector(".carts-products");
//check if there item in localstorge
let shopingCartIcon = document.querySelector(".shopingCart");
let addItem = localStorage.getItem("productsIncart")
  ? JSON.parse(localStorage.getItem("productsIncart"))
  : [];

  
shopingCartIcon.addEventListener("click", openCartMenu);

if (addItem) {
  addItem.map((item) => {
    cartProductsDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addItem.length;
}

function openCartMenu() {
    if (cartProductsDivDom.innerHTML != "") {
      if (cartProductsMenu.style.display == "block") {
        cartProductsMenu.style.display = "none";
      } else {
        cartProductsMenu.style.display = "block";
      }
    }
  }
  