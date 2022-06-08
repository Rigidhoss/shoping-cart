var userInfoDom = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let linksdom = document.querySelector('#links');
let username = localStorage.getItem('local-username');
let logoutbtn=document.querySelector("#logout");
if (username){
   linksdom.remove();
  userInfoDom.style.display="flex";
  userDom.innerHTML = username;
}

logoutbtn.addEventListener('click',function(){
 localStorage.clear();
setTimeout(()=>{


  window.location="register.html";
},1500)


})