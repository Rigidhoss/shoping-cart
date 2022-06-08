var username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginbtn = document.querySelector('#sign-in');

let getuser = localStorage.getItem("local-username")
let getpassword = localStorage.getItem("locale-password")

loginbtn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value === "" || password.value === "")
    {
      alert("please fill data");
    }
    else if  (( getuser && getuser.trim() === username.value.trim()) && (getpassword && getpassword === password.value))
    {    
       setTimeout(()=>{

        window.location="index.html"
       },1500)
    }

        else{

            console.log("nothing");

        }

})

