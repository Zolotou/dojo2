const submitButton = document.querySelector('.button');
const form = document.querySelector('form');
const card = document.querySelector('.userCard');
const cardValue = document.querySelectorAll('.userValue');
// required input
const inputName = document.getElementById('nameUser');
const inputPassword = document.getElementById('passwordUser');
const inputBirth = document.getElementById('birthUser');
const inputPhone = document.getElementById('phoneUser');
let file;
let reader = new FileReader();
const userPhoto = document.querySelector('.userPhoto');

class User {
    constructor(name, password, birdthady = "-", phone = "-", picture="none") {
        this.name = name;
        this.password = password;
        this.birdthady = birdthady;
        this.phone = phone;
        this.picture = picture;
        this.array = [name,birdthady,phone]
    }

    static signup(nameUser, passwordUser){
        if(passwordUser == '' || nameUser == ""){
            submitButton.insertAdjacentHTML("afterend",'<h2 class="error">You dont have a password</h2>')
        }else{
            let newUser = new User(nameUser, passwordUser, inputBirth.value, inputPhone.value, file);
            form.style.display = "none";
            card.style.display = "block";
            newUser.renderCard();
            // this.renderCard(this.name, this.password, this.birdthady);
        }
    }

    renderCard(){
        for(let i=0; i < cardValue.length; i++){
            cardValue[i].textContent += this.array[i];
        }
        // userPhoto.src = `${file.name}`
        // reader.onload = function(){
        //     userPhoto.src = file.name;
        // }
        // reader.readAsDataURL(file[0]);
 
    }

    // saveUser(){
    //     localStorage.setItem("user",JSON.stringify(newUser));
    //     //JSON.parse()
    // }
}

function showFile(input) {
     file = input.files[0];
     console.log("reader.result")
     reader.onloadend = () => {
         console.log('onloadend');
         localStorage.setItem('picture22323', reader.result);
     }
     reader.readAsDataURL(file);
  }


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    userPhoto.style.backgroundImage = `url(${localStorage.getItem('image')})`;
    User.signup(inputName.value, inputPassword.value);
    console.log('button is pressed')
})