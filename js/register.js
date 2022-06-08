//register user
let username= document.querySelector("#username");
let email= document.querySelector("#email");
let password= document.querySelector("#password");
let registerBtn= document.querySelector("#signup");

registerBtn.addEventListener('click',function(e){
e.preventDefault();
if(username.value === "" || email.value === "" || password.value === ""){

   alert("please fill data");
}
else{
    localStorage.setItem('local-username',username.value);
    localStorage.setItem('locale-email',email.value);
    localStorage.setItem('locale-password',password.value);

    setTimeout(()=>{  
        window.location='login.html';
    },1500)

}

})