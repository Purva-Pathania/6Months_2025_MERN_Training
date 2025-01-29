//1. Create a function named remainder which take one argument y and prints the remainder of y if divided by 3

function remainder(y){                                  // remainder function creation
    var x = y%3                                        
    console.log("Remainder of y is: ",x)                // printing remainder
}
remainder(11)                                           // function call

let remaind = (y)=>{                                    //Arrow function
    var x = y%3                                        
    console.log("Remainder of y is: ",x) 
}
remaind(40)                                              // calling of arrow function

//2. Create a function which takes one argument as a number and tells if the number is even or odd

function num(a){                                        //num function creation
    if(a%2==0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }
}
num(22)                                                  //function call

let number=(x)=>{                                       // arrow function
    if(x%2==0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }
}
number(1)                                               // function calling

//3. Create an arrow function named equal which takes two arguments and tells if the two arguments are equal or not

let equal = (x,y)=>{                                    //equal arrow function creation
    if(x==y){
        console.log("Arguments are equal");   
    }
    else{
        console.log("Arguments are not equal");
    }
}
equal(11,12)                                            // calling
equal(1,1)

//4. Create any pure function of your choice

function add(a,b){                                      //add function creation
    let m=a+b                                           //pure function
    console.log("Sum of a and b is: ",m)
}
add(10,10)                                              //function call     

let sum=(a,b)=>{                                        // arrow function
    let m=a+b
    console.log("Sum of a and b is: ",m)
}
sum(12,24)                                              //call

//5. Create an arrow function which takes one argument as price and calculates the GST of the item, if the total is more than 1000 then there will be no shipping charge to the items, if the total is more than 500 then shipping charge will be 50 and if the total is less than 500 then shipping charge will be 100

let calculation=(price)=>{                              // calculation arrow function creation
    var gstRate=18/100
    var gstAmount=price*gstRate
    let total=price+gstAmount
    if(total>1000){
        console.log("There will be no shipping charges")
    }
    else if(total>500)
        console.log("Then shipping charge will be 50")
    else
        console.log("Then shipping charge will be 100")
}

calculation(1001)                                        // call
calculation(501)
calculation(400)