"use strict"
let txt_input= document.getElementById("Product_names")
// console.log(txt_input);
let amt_input=document.getElementById("Amount_field")
// console.log(amt_input);
let add_btn=document.querySelector("#btn")
let alert_msg=document.querySelector("p")
let alert_msg2=document.querySelector(".in")
let totalvalue=0;
let amount=parseInt(amt_input.value)
let fullform=document.forms.validation

add_btn.addEventListener("click",(event)=>{
    event.preventDefault()

if(txt_input.value=="")
{
  alert("please enter a value")
}

else if(amt_input.value==""){
  alert("please enter a value")
}
 
else if(txt_input.value=="" && amt_input.value=="")
{ 
  alert("please enter a value")

}

  else{
    
    let show=document.createElement("div")
    show.id="history_show"

    let items=document.createElement("P")
    items.className="product"
    items.innerHTML=txt_input.value
    
    let rupee=document.createElement("p")
    rupee.className="money"
    rupee.innerHTML=amt_input.value

    let total=document.createElement("p")
    total.className="balance"
    totalvalue += amount
    total =`Total:${totalvalue}`

   
   let item_rupee=document.createElement("div")
   item_rupee.id="both"
   item_rupee.append(items,rupee)

   let del=document.createElement("i")
   del.setAttribute("class","fa-solid fa-trash")

    show.appendChild(item_rupee)
    show.append(del,total)

    let side=document.querySelector(".side_container")
    side.append(show)
     

    txt_input.value = "";
    amt_input.value = "";
  
     del.addEventListener("click",()=>{
      // console.log("hi");
      show.remove()
   
   })
  }
})

