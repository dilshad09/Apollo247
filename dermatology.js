document.getElementById("consultNowPage").style.display = "none";
document.getElementById("bookBtn").addEventListener("click", function(){
   document.getElementById("consultNowPage").style.display = "inline-block";
})
document.getElementById("cancelbtn").addEventListener("click", function(){
   document.getElementById("consultNowPage").style.display = "none";
  
})

document.getElementById("paybtn").addEventListener("click", function(){
   window.location.href = "payment.html";
   // console.log("dilshad Ahmad")
  
})

document.getElementById("apolloLogo").addEventListener("click", function(){
   window.location.href = "index.html";
})