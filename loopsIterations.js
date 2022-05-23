// level {1/2/3}

// ## Level 1

// ---

// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.

const row = 4;

for(let i=1; i<=row; i++) {
    for(let j=1; j<row-i; j++) {
        console.log("");
    }
    for(let j=1; j<=i; j++) {
        console.log(j);
    }
    for (let j = i-1; j >=1; j--) {
       console.log(j);        
    }
    console.log('\n');
}

