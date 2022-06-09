//display PRoducts


let productsDom =document.querySelector('.products');
let noProductsDom =document.querySelector ('.noproducts');

let drawProductUI;
(drawProductUI = function (products = []) {
    let myProducts = products.filter(item=>item.isMe ==='Y');


    if (myProducts != 0){
    console.log(myProducts);
  
  
  let productsUI = myProducts.map((item) => {
    return `
          
          <div class="product-item" style="border:${item.isMe==="Y" ? '1px solid green' : ""
        }">
          <img 
          src="${item.imgUrl}"  class="product-item-image"
           alt="" 
           />
          <div class="product-item-des">
              <a onclick='saveItemData(${item.id})'>${item.title} </a>
              <p>${item.desc}</p>
              <span>${item.size}</span>

            <button class='edite-product' onclick='editProduct(${
                item.id
            })'>  Edit Product </button> 
            <br>

            <button class='edite-product' onclick='deleteProduct(${
                item.id
              })'>  delete Product </button>
          </div>
    
      </div>
    
    `; 
     
           
    
  });
productsDom.innerHTML = productsUI.join("");
    } else {
        noProductsDom.innerHTML = "no PRoducts";
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB); //invok function



//edit product
function editProduct(id){
    // console.log("id",id);
    localStorage.setItem("editProduct",id);
    window.location = "editProduct.html";
  }

//delete product
  function deleteProduct(id){
    // console.log("id",id);
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter(item=>item.isMe ==='Y');
    let filterd = myProducts.filter(i=>i.id !== id);
 
 
    let clickedItem = myProducts.find(i=>i.id===id)
    products = products.filter((i)=>i.id !==clickedItem.id);
    localStorage.setItem("products", JSON.stringify(products));
    
    drawProductUI(filterd);
  }