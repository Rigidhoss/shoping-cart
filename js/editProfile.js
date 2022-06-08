
//get Data from local storge
let get_name = localStorage.getItem('local-username');
let get_email = localStorage.getItem('locale-email');



//varibles 
let userInput= document.getElementById('changeName');
let userEmailInput= document.getElementById('changeEmail');
let editFrom = document.getElementById('edit-profile-form');
//setting values
userInput.value= get_name;
userEmailInput.value = get_email;

//events
editFrom.addEventListener('submit', editProfileData);

function editProfileData(e){
    e.preventDefault();

    localStorage.setItem('local-username',userInput.value);
 localStorage.setItem('locale-email',userEmailInput.value);
 setTimeout(()=>{

    window.location="profile.html";
 },500)
}

