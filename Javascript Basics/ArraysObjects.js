//1.Create an array named country having 5 countries name in it and perform following operation:
//Print the entire array and its length
//Print the country at position 3
//Remove first country
//Add a new country in the end
//Traverse the array

let country = ["India","America","Nepal","Italy","Canada"]
for(var i=0;i<country.length;i++){
    console.log(country[i])                                          //Print entire array
}
console.log("Length of an array: ",country.length)                   //Print array's length
console.log(country[2])                                              //Country at position 3
country.shift()                                                      //Remove first country
console.log(country)
country.push("Sri Lanka")                                            //Add a new country in the end
console.log(country)
for(var i=0;i<country.length;i++){
    console.log(country[i])                                          //Traverse the array
}

//2.Create an object named employee with keys employee_name, dept, and join_year
//Print object 
//Print dept of the employee
//delete join_year
//replace employee_name with your own name

var employee = {                                                      //Object Creation
    employee_name:"Ajay Verma",
    dept:"Engineering",
    join_year: 2025
}
console.log(employee)                                                //Printing object
console.log(employee.dept)                                           //Printing dept
delete employee.join_year                                            //Deleting join_year
console.log(employee)
employee.employee_name="Purva Pathania"                             //Replacing employee name
console.log(employee)

//3.Create a function with rest parameter and print traverse each element present in the argument

function elem(...x){
    for(let i=0;i<x.length;i++)
    {
        console.log(x[i])
    }
}
elem("asd","asdf","werws")

//4.Create an array named numbers containing 50 numbers. Then, create a smaller array that includes all the numbers from the numbers array that are divisible by three.

let numbers = new Array(50)
console.log(numbers)
let small=numbers.slice(numbers % 3 == 0);
console.log(small)


//5.Create an array named i_am_array of 20 elements,
//a) Print i_am_array
//b) Print each element of i_am_array
//c) Create a new array named teen_guna which stores each element of i_am_array multiplied
//by 3
//d) Print teen_guna array
//e) Print the total length of teen_guna array
//f) Print the type of teen_guna array as well as i_am_array
//e.g. (teen_guna type is: _________) Print in this way

let i_am_array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i=0;i<i_am_array.length;i++){
    console.log(i_am_array[i])
}
let teen_guna=i_am_array.slice(0*3,20*3)
for(let i=0;i<teen_guna.length;i++){
    console.log(teen_guna[i])
}
console.log(teen_guna.length)
console.log("teen_guna type is:",typeof(teen_guna))
console.log("i_am_array type is:",typeof(i_am_array))
