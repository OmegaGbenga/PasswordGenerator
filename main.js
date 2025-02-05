const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector("#btn");
const copybtn = document.querySelector("#copybtn");
const passwordLength = 16;
 
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXZY';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+?/|';
const allChars = upperCase + lowerCase + number + symbol;


function createPassword(){
    let password =""; 
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length < passwordLength){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password; 
};

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


generateBtn.addEventListener("click", createPassword);
copybtn.addEventListener("click", copyPassword);