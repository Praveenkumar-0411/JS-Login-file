
function login()
{
    let usernameVal = document.getElementById("username").value;
    let passwardVal = document.getElementById("passward").value;

    if(usernameVal=="Entri Elevate" && passwardVal=="admin123")
    {
        window.location.assign("form.html");
        
       
    }
    else
    {
        alert("Login Failed")
     }
}

function forget()
{
    let a=prompt("Enter login E-Mail:");
    window.alert("Verification link sent to your email.Thank You!");
}