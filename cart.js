

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

document.getElementById("apolloLogo").addEventListener("click", function(){
    window.location.href = "index.html";
})


// products addition and deletion an other functionality

let prod = JSON.parse(localStorage.getItem("prd")) ;
         
displayItem(prod);

function displayItem(item){

   item.map(function(element, index){
       
       let mainDiv = document.createElement("div");

       let imgDiv = document.createElement("div");
       let img = document.createElement("img");
       img.src = element.img;
       imgDiv.append(img);

       let nameDiv = document.createElement("div");
       let h2 = document.createElement("h2");
       h2.innerHTML = element.name;
       nameDiv.append(h2);

       let priceDiv = document.createElement("div");
       let h3 = document.createElement("h3");
       h3.innerHTML = element.price;
       priceDiv.append(h3);

       let delBtn = document.createElement("button");
       delBtn.innerHTML = "Delete Item";
       delBtn.setAttribute("id", "delbtn")
       // delBtn.addEventListener("click" , deleteItem)
       delBtn.addEventListener("click", function(){
           deleteItem(index);
          
       })

       mainDiv.append(imgDiv,nameDiv, priceDiv, delBtn);
       document.getElementById("products").append(mainDiv);
   })
}


function deleteItem(index){
  prod.splice(index,1);
   localStorage.setItem("prd", JSON.stringify(prod));
   displayItem(prod);
   window.location.reload();
//     window.addEventListener("load", function(){
//      displayItem(prod);
    
//  })
              
}






totalBill(prod);

function totalBill(total){
 let totalPrice =   total.reduce(function(acc, cv){
   let x = cv.price;
   let par = x.slice(3);
    return (acc + Number(par));
   },0)
     
 total.map(function(el,index){

   let totalDiv = document.createElement("div");

   let nameDiv = document.createElement("p");
   nameDiv.innerText = el.name;

   let priceDiv = document.createElement("h3");
   priceDiv.innerText = el.price;

   let hr = document.createElement("hr");
   

   totalDiv.append(nameDiv, priceDiv,hr);
   document.getElementById("total").append(totalDiv);
   
 })
 let totalPriceDiv = document.createElement("h1");
 totalPriceDiv.innerHTML = `Total Ammount : ${totalPrice}`;
 totalPriceDiv.setAttribute("id", "money")
 
 let payBtnDiv = document.createElement("div");
 let payBtn = document.createElement("button");
 payBtn.innerHTML = "Pay Now";
 payBtn.setAttribute("id", "payBtn");
 payBtnDiv.append(payBtn)
 payBtn.addEventListener("click", function(){
     window.location.href = "medicinePayement.html";
 })

 document.getElementById("total").append(totalPriceDiv,payBtnDiv);
 
   
}

document.getElementById("doctors").addEventListener("click", function(){
    window.location.href = "doctors.html";
})

document.getElementById("pharmacy").addEventListener("click", function(){
    window.location.href = "pharmacy.html";
})

document.getElementById("apolloLogo").addEventListener("click", function(){
    window.location.href = "index.html";
})