"use strict"
let txt_input= document.getElementById("Product_names")
// console.log(txt_input);
let amt_input=document.getElementById("Amount_field")
// console.log(amt_input);
let add_btn=document.querySelector("#btn")
// console.log(add_btn);
let element=document.getElementsByTagName("h6")
// console.log(element);

let fullform=document.forms.validation
// console.log(fullform);

add_btn.addEventListener("click",(event)=>{
    event.preventDefault()
console.log("hi");
    if(txt_input.value=="")
    {
        element[0].classList.add(".block")
        alert("invalid")
        
    }
    else if(amt_input.value=="")
    {
        alert("invalid")
        return;
    }
   else if(txt_input.value=="" & amt_input.value==""){
        alert("invalid")
        return;
    }
    let show=document.createElement("div")
    show.id="history_show"

    let items=document.createElement("P")
    items.className="product"
    items.innerHTML=txt_input.value
   
    let rupee=document.createElement("p")
    rupee.className="money"
    rupee.innerHTML=amt_input.value

    let line=document.createElement("hr")
    line.className="hr_line"

    let total=document.createElement("p")
    total.classList="balance"
    total.innerHTML=amt_input.value
    
    show.appendChild(items)
    show.appendChild(rupee)
    show.appendChild(line)
    show.appendChild(total)

    let pricelist=document.createElement("div")
    pricelist.appendChild(show)

    let side=document.querySelector(".heading")
    side.append(pricelist)

})

