var signUpArr = JSON.parse(localStorage.getItem("signup"))||[]
// var loginarr = JSON.parse(localStorage.getItem("login"))||[];

var form = document.getElementById("form")



form.addEventListener("submit",function(event){
    event.preventDefault()
    if(signUpArr.length==0){
        alert("User Does'nt exist signup first")
        window.location.href = "signup.html"
    }
    else{
    var objlogin = {
        fullName:form.fname.value,
        password:form.password.value,
        email:form.Email.value,    
    }
   display(objlogin)
}
})
console.log(signUpArr.length)

function display(objlogin){

    for(let elem of signUpArr){

        if(elem.email === objlogin.email &&
           elem.password === objlogin.password){

            alert("Login Successful");

            localStorage.setItem("login", JSON.stringify(elem));

            window.location.href = "index.html";

            return;
        }

    }

    alert("Invalid Email or Password");
}
 

