//generate random password
function generate(){

    //set password length
    let length = document.getElementById("myRange").value;

    //password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //loop through the password values to choose password characters
    for(var i = 0; i <= length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to viewerPoint
    document.getElementById("viewerPoint").value = password;



}

//set default length display of 8
document.getElementById("range").innerHTML = "Length: 8";

//function to set length based on slider position
document.getElementById("myRange").oninput = function(){

    if(document.getElementById("myRange").value > 0){
        document.getElementById("range").innerHTML = "Length: " + document.getElementById("myRange").value;
    }
    else{
        document.getElementById("range").innerHTML = "Length: 1";
    }

}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("viewerPoint").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}