

document.getElementById("pay").addEventListener("click", function(){
    document.getElementById("pay").style.display = "none"
    let otp = document.createElement("input");
    otp.placeholder = "enter your OTP"
    let otpDiv1 = document.createElement("div");
    otpDiv1.setAttribute("class", "inputdiv")

    let otpbtn = document.createElement("input"); 
    otpbtn.type = "button";
    otpbtn.value = "Pay Now";
    let otpDiv2 = document.createElement("div");
    otpDiv2.setAttribute("class", "inputdiv")

    otpDiv2.append(otpbtn)
    otpDiv1.append(otp);

    document.getElementById("paymentDiv").append(otpDiv1,otpDiv2);

    otpbtn.addEventListener("click", function(){
       window.alert("Congratulation! : your payment is Successful")
    })

})

document.getElementById("doctors").addEventListener("click", function(){
    window.location.href = "doctors.html";
})

document.getElementById("pharmacy").addEventListener("click", function(){
    window.location.href = "pharmacy.html";
})
document.getElementById("cart").addEventListener("click", function(){
    window.location.href = "cart.html";
})

document.getElementById("apolloLogo").addEventListener("click", function(){
    window.location.href = "index.html";
})