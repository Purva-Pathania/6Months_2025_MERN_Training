//1.Create a function which takes one argument and prints its table For E.g 2*1=2, 2*2=4...

function table(numb){
    console.log("Multiplication Table-")
    for(var i=0;i<=10;i++){
        var x = numb*i;
        console.log(numb,"*",i,"=",x)
    }
}
table(2)

//2.Create a function in which we can pass any string and it prints each letter of that string 
//For ex.  printName("ajay") 
//output - 
//a
//j
//a
//y

function printName(arr){
    for(var i=0; i<arr.length;i++){
        console.log(arr[i])
    }
}
printName("Purva Pathania")

//Create a loop which gives the following output - 
//1,1,1 
//1,1,2
//1,1,3
//1,2,1
//1,2,2
//1,2,3

for(var i=1;i<=1;i++){
    for(var j=1;j<=2;j++){
        for(var z=1;z<=3;z++){
            console.log(i,",",j,",",z)
        }
    }
}