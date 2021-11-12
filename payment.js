document.getElementById("receiptPage").style.display = "none";

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
        document.getElementById("paymentDiv").style.visibility = "hidden";
        document.getElementById("receiptPage").style.display = "inline-block";
        document.getElementById("timing").innerHTML += new Date();
        document.getElementById("token").innerHTML += `${Math.floor(Math.random()*100)}`;
    })

})

document.getElementById("apolloLogo").addEventListener("click", function(){
    window.location.href = "index.html";
})