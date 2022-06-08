
let productsDom =document.querySelector('.products');
let noProductsDom =document.querySelector ('.noproducts');

function drawFavoritsProductsUI(allproducts=[]){
    if (JSON.parse(localStorage.getItem('productFavorite')).length==0){

        noProductsDom.innerHTML=`there is no items`
    }
    let products =
    JSON.parse(localStorage.getItem('productFavorite'))|| allproducts ;
    let productsUI = products.map((item) => {
     
      return`
            
            <div class="product-item">
            <img src="${item.imgUrl}"  class="product-item-image" alt="">
            <div class="product-item-des">
                <h2>${item.title} </h2>
                <p>${item.desc}</p>
                <span>${item.size}</span> <br>
                <span> quantity : ${item.qty}</span> 
                
            </div>
            <div class="product-item-actions">
          
   
              
                <button class="add-to-cart" onclick="removeItemFromFavorit(${item.id})">remove From favorite</button>
               
            </div>
        </div>
      
      
      
      
      `
    })
    productsDom.innerHTML=productsUI.join("");;
}
drawFavoritsProductsUI();
function removeItemFromFavorit(id){
    let productFavorite = localStorage.getItem("productFavorite")
    if(productFavorite){
        let items = JSON.parse(productFavorite);
     let filterItems =   items.filter((item)=> item.id !== id ) ;
        localStorage.setItem('productFavorite',JSON.stringify(filterItems));
        drawFavoritsProductsUI(filterItems);
    }

}