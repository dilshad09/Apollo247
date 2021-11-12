let counter = 1;
setInterval(function(){
    document.getElementById("radio"+counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
},3000);

document.getElementById("loginPage").style.display= "none";
document.getElementById("otpPage").style.display = "none";

function loginPage(){
   document.getElementById("loginPage").style.display = "inline-block";

   // document.querySelector("*").style.backgroundColor = "rgba(0,0,0,0.4)";
   
   // document.querySelector("*").style.zIndex = "99";
}

function closeNav() {
    document.getElementById("loginPage").style.display = "none";
}

function goToOTP(){
   let x = document.getElementById("mobileNo").value ;
   if(x==""){
       alert("enter your mobile number first");
   }else if(x.length<10){
       alert("enter your correct mobile number")
   }
   else{
       document.getElementById("loginPage").style.display= "none";
   document.getElementById("otpPage").style.display = "inline-block";
   }
   
}

function cancelOtpPage(){
   document.getElementById("otpPage").style.display = "none";
   document.getElementById("loginPage").style.display= "inline-block";
}

function putOTP(){
 let y = document.getElementById("otp").value;
 if(y==""){
     alert("enter your OTP first");
 }else{
   document.getElementById("otpPage").style.display = "none";
   document.getElementById("loginPage").style.display= "none";
   alert("sign in successful");
 }
} 
function goToCartPage(){
     window.location.href = "cart.html";
   
}
document.getElementById("apolloLogo").addEventListener("click", function(){
    window.location.href = "index.html";
})

document.getElementById("doctors").addEventListener("click", function(){
    window.location.href = "doctors.html";
})

document.getElementById("pharmacy").addEventListener("click", function(){
    window.location.href = "pharmacy.html";
})

let bookApp = document.getElementsByClassName("bookApoint");
bookApp[0].addEventListener("click", function(){
    window.location.href = "doctors.html";
})

let pharma = document.getElementsByClassName("bookApoint");
pharma[1].addEventListener("click", function(){
    window.location.href = "pharmacy.html";
})