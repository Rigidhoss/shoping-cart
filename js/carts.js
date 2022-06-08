
let productsDom =document.querySelector('.products');
let noProductsDom =document.querySelector ('.noproducts');

function drawCartsProductsUI(allproducts=[]){
    if (JSON.parse(localStorage.getItem('productsIncart')).length==0){

        noProductsDom.innerHTML=`there is no items`
    }
    let products =
    JSON.parse(localStorage.getItem('productsIncart'))|| allproducts ;
    let productsUI = products.map((item) => {
     
      return`
            
            <div class="product-item">
            <img src="${item.imgUrl}"  class="product-item-image" alt="">
            <div class="product-item-des">
                <h2>${item.title} </h2>
                <p>${item.desc} </p>
                <span>${item.size}</span> <br>
                <span> quantity : ${item.qty}</span> 
                
            </div>
            <div class="product-item-actions">
                <!--    -->
                <!-- <i class="fa-solid fa-cart-shopping"></i>  -->
              
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">remove From Cart</button>
                <i class="favorite far fa-heart  heart"></i> 
            </div>
        </div>
      
      
      
      
      `
    })
    productsDom.innerHTML=productsUI.join("");
}
drawCartsProductsUI();
function removeItemFromCart(id){
    let productsIncart = localStorage.getItem("productsIncart")
    if(productsIncart){
        let items = JSON.parse(productsIncart);
     let filterItems =   items.filter((item)=> item.id !== id ) ;
        localStorage.setItem('productsIncart',JSON.stringify(filterItems));
        drawCartsProductsUI(filterItems);
    }

}