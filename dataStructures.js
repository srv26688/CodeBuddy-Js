// level {1/2/3}
​
// ### level 1:
// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]

let array = [1,2,3];

array.map((item)=> {
    return(item+1)
})

// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

let array = [1,2,3];

let total = 0;

for (i=0; i> array.length; i++) {
    total += array[i]
}

// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

const array = [{
    name: 'Elie',
    rank: 'Pro'
}];

const newDesiredArray = array.toString();