// define products

let productsDom = document.querySelector(".products");

// let cartProductsDivDom = document.querySelector(".carts-products div");

// let badgeDom = document.querySelector(".badge");
let products = productsDB;

//open cart menu


//display products
let drawProductUI;
(drawProductUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
          
          <div class="product-item" style="border:${item.isMe==="Y" ? '1px solid green' : ""}">
          <img src="${item.imgUrl}"  class="product-item-image" alt="">
          <div class="product-item-des">
              <a onclick='saveItemData(${item.id})'>${item.title} </a>
              <p>${item.desc}</p>
              <span>${item.size}</span>
              ${item.isMe === "Y" && "<button class='edite-product' onclick='editProduct("+ item.id +
              ")'>  Edit Product </button>"}
          </div>
          <div class="product-item-actions">
            
              <!-- <i class="fa-solid fa-cart-shopping"></i>  -->
            
              <button class="add-to-cart" onclick="addTocart(${
                item.id
              })"> add to cart</button>
              <i class="favorite far fa-heart  heart" style=color:${
                item.liked == true ? "red" : ""
              } onclick="addToFavorite(${item.id})"> </i> 
          </div>
      </div>
    
    
    
    
    `;
  });
  productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || productsDB); //invok function

//check if there item in localstorge
// let addItem = localStorage.getItem("productsIncart")
//   ? JSON.parse(localStorage.getItem("productsIncart"))
//   : [];

// if (addItem) {
//   addItem.map((item) => {
//     cartProductsDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`;
//   });
//   badgeDom.style.display = "block";
//   badgeDom.innerHTML += addItem.length;
// }

//add to cart

function addTocart(id) {
  if (localStorage.getItem("local-username")) {
    let products = JSON.parse(localStorage.getItem("products"))|| productsDB;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addItem = addItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addItem.push(product);
    }

    // UI
    cartProductsDivDom.innerHTML = "";
    addItem.forEach((item) => {
      cartProductsDivDom.innerHTML += `<p> ${item.title} <span class="qty">${item.qty} </span></p>`;
    });

    // save Data
    localStorage.setItem("productsIncart", JSON.stringify(addItem));
    //add Counter of items
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";

    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

//open cart menu

function saveItemData(id) {
  localStorage.setItem("productID", id);
  window.location = "cartDetails.html";
}

//search function
let input = document.getElementById("search");
input.addEventListener("keyup", function (e) {
  search(
    e.target.value,
    JSON.parse(localStorage.getItem("products")) || products
  );

  if (e.target.value.trim() === "") {
    drawProductUI(JSON.parse(localStorage.getItem("products")));
  }
});
function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
  drawProductUI(arr);
}

//add to favorite
let favoriteItems = localStorage.getItem("productFavorite")
  ? JSON.parse(localStorage.getItem("productFavorite"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("local-username")) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked = true;

    favoriteItems = [...favoriteItems, chosenItem];
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("productsIncart", JSON.stringify(uniqueProducts));
    localStorage.setItem("productFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === chosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProductUI(products);
  } else {
    window.location = "login.html";
  }
}

//filter Products By size
let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getProductfilterBySize )

function getProductfilterBySize (e){



  let val = e.target.value ;
  let products = JSON.parse(localStorage.getItem("products")) || products;
if (val === "all"){
  drawProductUI(products);

}
else {
  products = products.filter(i => i.size === val);
  drawProductUI(products);
}
}


//edit product
function editProduct(id){
  // console.log("id",id);
  localStorage.setItem("editProduct",id);
  window.location = "editProduct.html";
}