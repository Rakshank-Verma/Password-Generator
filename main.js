let Password = "";
let strongPassword = "";
let moreStrongPassword = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let specialSymbol = "@#$%&?";

// Function to reset 
function reset(){
    document.getElementById("passwd").innerText = "";
    optionalParam = document.getElementById("optionalParam").value = "";
    document.getElementById("length").value = null;
}

// Function to get Password
function getPasswd()
{
    let length = document.getElementById("length").value;
    optionalParam = document.getElementById("optionalParam").value;

    if(optionalParam.length > length){
        alert("Your optional keyword length should be less or equal to the length of password.");
    }

    // Password should be 8 characters long atleast
    if(length < 8)
    {
        alert("Password should be 8 or more characters long!");
        document.getElementById("length").value = null;
    }

    // If optional parameter not given
    else if(length>=8 && optionalParam == "")
    {
        for(let i=0; i<length; i++){
            let random = Math.random()*62;
            Password += str.charAt(random);
        }
        // Password[Math.random()*length] = specialSymbol.charAt(0); we can't change value like this -> str[8] = "j";
        strongPassword = Password.replace(Password[parseInt(Math.random()*length)], specialSymbol[parseInt(Math.random()*6)]);
        document.getElementById("passwd").innerText=strongPassword;
        Password = "";
        strongPassword = "";
    }

    else if(length>=8 && optionalParam != null)
    {
        // length-(optionalParam.length-1) -> This is to keep password of given length
        for(let i=0; i<(length-(optionalParam.length-1)); i++){
            let random = Math.random()*62;
            Password += str.charAt(random);
        }
        let len = Password.length;
        strongPassword = Password.replace(Password[(parseInt(Math.random()*len))], specialSymbol[parseInt(Math.random()*6)]);
        moreStrongPassword = strongPassword.replace(strongPassword[(parseInt(Math.random()*len))], optionalParam);
        document.getElementById("passwd").innerText=moreStrongPassword;   
        Password = "";
        strongPassword = "";
        moreStrongPassword = "";
    }
}