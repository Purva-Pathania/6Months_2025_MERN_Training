function getData(){
    let data = document.getElementById("inp").value 
    let pattern= document.createElement("div")
    pattern.innerHTML=
    `<div class="card w-auto">
        <div class="card-body d-flex justify-content-between flex-wrap">
            <h5 class="card-title text-break">${data}</h5>
            <div class="d-flex gap-2">
            <a class="btn btn-primary" onclick="doEdit(this)">Edit</a>
            <a class="btn btn-primary text-danger" onclick="del(this)">Delete</a>
            </div>
        </div>
    </div>`
    document.getElementById("add").appendChild(pattern)
    document.getElementById("inp").value=""
}
function doEdit(element){
    let data = element.closest(".card").querySelector("h5")
    let text = prompt("Edit your to do:",data.innerText)
    if(text!==null && text.trim()!==""){
        data.innerText=text
    }
}
function del(ele){
    ele.closest(".card").remove();
}