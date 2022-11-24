'use strict'




const navBtn =document.querySelector(".btn-main-nav");
const iconClose = document.querySelector(".icon-close")
const iconOpen = document.querySelector(".icon-open")
const headerEl =document.querySelector(".header");
const html =document.querySelector("html");

const tabsContainer =document.querySelector(".tabs");
const Alltabs =document.querySelectorAll(".tab-btn");
const featureContentCards =document.querySelectorAll(".feature-content");
const faqContainer=document.querySelector(".questions");

const inputEmail =document.querySelector(".input-email");
const errorMsg =document.querySelector(".error");


//*** input error*** */


inputEmail.addEventListener("blur",(e)=>{
   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
        console.log("valid");
        errorMsg.classList.add("hide");
    }else{

errorMsg.classList.remove("hide"); 
    }

})

/****mobile navigation */
navBtn.addEventListener("click",()=>{
    headerEl.classList.toggle("open-nav");
    html.classList.toggle("hide-overflowY");
    iconClose.classList.toggle("hide");
    iconOpen.classList.toggle("hide");

})


/*********tabs***** */
tabsContainer.addEventListener("click",function(e){
    const button=e.target;
    const tab_number= button.getAttribute("data-tab");
  

    if(button.classList.contains("tab-btn")){
  

        Alltabs.forEach((tab)=>tab.classList.remove("tab-btn-active"));
        featureContentCards.forEach((card)=>card.classList.remove("feature-content-active"));
        button.classList.add("tab-btn-active");
       document.querySelector(`.tab-content--${tab_number}`).classList.add("feature-content-active");


    }
  

})









/******** faq ******/
faqContainer.addEventListener("click",function(e){
 const button=e.target;
    if(button.classList.contains("q-button")){
        button.classList.toggle("q-button-active");
        button.closest(".q-card").classList.toggle("answer-active");
       
    }
})