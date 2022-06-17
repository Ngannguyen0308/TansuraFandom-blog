var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var email = document.forms['form']['email'];
var phoneNum = document.forms['form']['phonenum'];


var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');
var email_error = document.getElementById('email_error');
var phoneNum_error = document.getElementById('phoneNum_error');


username.addEventListener('textInput', username_Verity);
password.addEventListener('textInput', password_Verity);
email.addEventListener('textInput', email_Verity);
phoneNum.addEventListener('textInput', phoneNum_Verity);


function validated(){
    if(username.value.length == 0 ){
        username.style.border = '1px solid red';
        username_error.style.display = "block";
        username.focus();
        return false;        
    }
    if(password.value.length == 0){
        password.style.border = '1px solid red';
        password_error.style.display = "block";
        password.focus();
        return false;
    }
    if(email.value.length == 0){
        email.style.border = '1px solid red';
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(phoneNum.value.length == 0){
        phoneNum.style.border = '1px solid red';
        phoneNum_error.style.display = "block";
        phoneNum.focus();
        return false;
    }
    
}

// verity
function username_Verity(){
    if(username.value.length != 0){
        username.style.border = '1px solid green';
        username_error.style.display = "none";
        return true; 
    }
}
function password_Verity(){
    if(password.value.length != 0){
        password.style.border = '1px solid green';
        password_error.style.display = "none";
        return true;
    }
}
function email_Verity(){
    if(email.value.length != 0){
        email.style.border = '1px solid green';
        email_error.style.display = "none";
        return true;
    }
}
function phoneNum_Verity(){
    if(phoneNum.value.length != 0){
        phoneNum.style.border = '1px solid green';
        phoneNum_error.style.display = "none";
        return true;
    }
}

//button -> signup page
function createAcc(){
    window.location.href = "signup.html";
}

