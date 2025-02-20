let arr1=[]
function getAdd(){
    var add = document.getElementById("add").value 
    if(arr1.includes(add)){
        document.getElementById("add").value=""
        alert("Product already exist")
        arr1.push()=""
    }
    else{
        arr1.push(add)
    }
    if(!add.trim()){
        alert("Add Product")
        arr1.push()=""
    }
    else{
        document.getElementById("last").innerHTML="Product-"+add+" Added in the list"
    }
    document.getElementById("add").value=""
    let select =  document.getElementById("opt");
    let option =  document.createElement("option");
    option.text=add;
    select.appendChild(option)
    setTimeout(()=>{
        document.getElementById("last").innerHTML=""
    },1000)
}
let arr2=[]
function getPrice(){
    var price = document.getElementById("price").value
    let select =  document.getElementById("opt")
    document.getElementById("price").value=""
    let lastSelectedValue = select.value
    let currentSelectedValue = select.value
    if(!price.trim()){
        alert("Add Price")
        arr2.push()=""
    }
    else if(currentSelectedValue==""){
        alert("Add Product")
        arr2.push()=""
    }
    else if(currentSelectedValue==lastSelectedValue){
        document.getElementById("last").innerHTML="Successfully set "+ currentSelectedValue + " price to " +price
        arr2.push(price)
    }
    setTimeout(()=>{
        document.getElementById("last").innerHTML=""
    },1000)
}
function showPrice(){
    let select =  document.getElementById("opt").innerHTML
    if(!select.trim()){
        alert("Add data")
    }
    else{
        document.getElementById("update").innerHTML="Product Price Updated"
    }
    setTimeout(()=>{
        document.getElementById("update").innerHTML=""
    },1000)
    if(arr2==""){
        document.getElementById("data").innerHTML+=""
        alert("Add Price")
    }
    else{
    for(let i=0;i<arr1.length;i++){
        document.getElementById("data").innerHTML+="<option>"+arr1[i]+" $ "+arr2[i]+"/Unit"
    }
}
}
let arr3=[]
function cart(){
    let data = document.getElementById("data").innerHTML
    let quantity = document.getElementById("quantity").value
    if(!quantity.trim()){
        alert("Add Unit")
        arr3.push()=""
    }
    else if(!data.trim()){
        alert("Add Data")
    }
    else{
        alert("Added to cart")
        arr3.push(quantity)
    }
    document.getElementById("quantity").value=""
}
function showNumb(numb){
        document.getElementById("quantity").value=numb
}

function pay(){
    let data = document.getElementById("data").innerHTML
    if(!data.trim()){
        alert("Add Data")
    }
     else if(arr3==""){
        alert("Add Unit")
    }
    else{
    let select =  document.getElementById("opt").innerHTML;
    let total = arr2.map((num,index)=>num*arr3[index])
    let priElement=parseFloat(document.getElementById("pri").innerText)||0
    let amountTotal = priElement ? parseFloat(priElement.innerText)||0:0;
    amountTotal+=parseFloat(total.reduce((sum,value)=>sum+value))
    let body = document.getElementById("bodyy")
    let row = document.createElement("tr")
    row.innerHTML=
    `<tr>
        <td>${select}</td>
        <td>${arr2.join("<br>")}</td>
        <td>${arr3.join("<br>")}</td>
        <td>${total.join("<br>")}</td>
    </tr>`
    body.appendChild(row)
    let tax = amountTotal*0.05
    let amountDue = amountTotal + tax
    document.getElementById("pri").innerHTML=amountTotal
    document.getElementById("taxx").innerHTML=tax
    document.getElementById("due").innerHTML=amountDue
    let date = new Date()
    document.getElementById("date").innerText = date.toLocaleDateString()
    document.getElementById("time").innerText = date.toLocaleTimeString()
    var result = document.getElementById("lastReceipt").innerHTML
    document.getElementById("receipt").innerHTML=result
    }
}



