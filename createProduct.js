//variables

let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let createFrom  = document.getElementById('create-form');
 let inputFile  = document.getElementById('upload-image-file');


 
let productSizeValue;
let productImage;

//events
productSizeSelect.addEventListener('change',getProductSizeValue);
 createFrom.addEventListener('submit',createProductFun);
 inputFile.addEventListener("change",uploadImage);


//functions
function getProductSizeValue(e){
    // console.log( e.target.value);
    productSizeValue = e.target.value;
}

function createProductFun(e){
e.preventDefault();


    let allProducts= JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
      if (nameValue && descValue ){
    let obj={ 
         id: allProducts ? allProducts.length + 1  : 1,
        qty: 1 ,
        imgUrl:productImage,
        size: productSizeValue,
        title: nameValue,
        desc: descValue,
        isMe: "Y",
        

    };

    let newProducts = allProducts ? [...allProducts , obj] : [obj] ;
    localStorage.setItem("products",JSON.stringify(newProducts));

     productName.value ="";
     productDesc.value="";
     setTimeout(()=>{
       window.location="index.html";
     },500)
}  else {

  alert("enter Data")
}
}
function uploadImage(){
 
    let file = this.files[0]
  
    let type = ["image/jpeg" ,"img/png" ];
    
    if (type.indexOf(file.type) == -1){
      
      alert("type not supoorted");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("image not exced 2 MG");
      return;
    }
    getImageBase64(file);
    // productImage = URL.createObjectURL(file);

}


function getImageBase64(file){
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(){
    productImage = reader.result;
  }
  reader.onerror =function (){
     alert("error");
  }
}