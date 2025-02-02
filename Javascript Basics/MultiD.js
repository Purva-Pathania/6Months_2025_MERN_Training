//1. create an array named songs which have common object keys: 'song_name', 'singer', 'language':
//(a) add 5 different songs using the push method.
//(b) print all song names with their singers and language.
//(c) print song name at location 3 of the array.
console.log("-------------------------------Array named Songs-----------------------------")
let songs = [
    { "song_name": "Piya", "singer": "Kailash", "language": "Hindi" }
]
console.log("-------------------------------Pushing 5 different songs-----------------------------")
    songs.push(
        {"song_name": "Don", "singer": "Diljit Dosanjh", "language": "Punjabi"},
        {"song_name": "Ishq Hai", "singer": "Anurag", "language": "Hindi"},
        {"song_name": "Trump", "singer": "Cheema", "language": "Punjabi"},
        {"song_name": "Like I Do", "singer": "J.Tajor", "language": "English"},
        {"song_name": "Beautiful", "singer": "Euphoria", "language": "English"}
    )
console.log("-------------------------------Print Songs-----------------------------")
console.log(songs)
console.log("-------------------------Song names with their singers and language---------------------")
for(let i=0;i<songs.length;i++){
    console.log( "song_name: ",songs[i].song_name,",","singer: ",songs[i].singer,",","language: ",songs[i].language)
}
console.log("-----------------------------Song name at location 3----------------------------")
console.log(songs[2].song_name)

//2. create a three dimensional array of your own choice (array-in array-in array).
console.log("-------------------------3D Array--------------------------")
let array=[
    [
        [1,2,3,4,5,6],
        [23,234,53,55,2]
    ],
    [
        [87,45,43,1],
        [98,23,11,2]
    ]
]
console.log(array)

//3. create an object of food items having 2 keys: veg & non_veg. the 'veg' key contains again an object with the keys 'w' for wheat and 'c' for cheese, whereas 'non_veg' key contains an object having keys 'ck' for chicken kabaab and 'ec' for egg curry.
//(a) write syntax for printing cheese.
console.log("---------------------------object of food items----------------------")
let food_items={
    veg:{"w":"objects", "c": "cheese",},
    non_veg:{"ck": "chicken kabaab", "ec": "egg curry"}
}
console.log("-------------------Syntax for printing cheese-------------------------")
console.log(food_items.veg.c)

//4. Write a function that takes a nested array and returns a flattened array (an array without any nested arrays).
//Example: if we pass this array const nestedArray = [1, [2, [3, [4, 5]]]]; we get [1,2,3,4,5] flattened array 

let nestedArray = [1,
    [
       2,[3,[4,5]]
    ]
]
console.log("----------------------------Returns a flattened array---------------------------------")
function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log(flattenArray(nestedArray))