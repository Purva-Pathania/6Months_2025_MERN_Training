function getInp1(){
    let inp = document.getElementById("input1").value.trim().toLowerCase()
    if(inp==="g"){
        document.getElementById("letter1").src="PIC/image1.png"
        document.getElementById("input1").disabled=true
        document.getElementById("input2").focus()
    }
    else{
        document.getElementById("letter1").src="PIC/image2.png"
    }
}
function getInp2(){
    let inp = document.getElementById("input2").value.trim().toLowerCase()
    if(inp==="e"){
        document.getElementById("letter2").src="PIC/image1.png"
        document.getElementById("input2").disabled=true
        document.getElementById("input3").focus()
    }
    else{
        document.getElementById("letter2").src="PIC/image2.png"
    }
}
function getInp3(){
    let inp = document.getElementById("input3").value.trim().toLowerCase()
    if(inp==="n"){
        document.getElementById("letter3").src="PIC/image1.png"
        document.getElementById("input3").disabled=true
        document.getElementById("input4").focus()
    }
    else{
        document.getElementById("letter3").src="PIC/image2.png"
    }
}
function getInp4(){
    let inp = document.getElementById("input4").value.trim().toLowerCase()
    if(inp==="i"){
        document.getElementById("letter4").src="PIC/image1.png"
        document.getElementById("input4").disabled=true
        document.getElementById("input5").focus()
    }
    else{
        document.getElementById("letter4").src="PIC/image2.png"
    }
}
function getInp5(){
    let inp = document.getElementById("input5").value.trim().toLowerCase()
    if(inp==="u"){
        document.getElementById("letter5").src="PIC/image1.png"
        document.getElementById("input5").disabled=true
        document.getElementById("input6").focus()
    }
    else{
        document.getElementById("letter5").src="PIC/image2.png"
    }
}
function getInp6(){
    let inp = document.getElementById("input6").value.trim().toLowerCase()
    if(inp==="s"){
        document.getElementById("letter6").src="PIC/image1.png"
        document.getElementById("input6").disabled=true
    }
    else{
        document.getElementById("letter6").src="PIC/image2.png"
    }
}