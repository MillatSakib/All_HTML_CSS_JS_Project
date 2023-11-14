let A = 'Geeks for Geeks';
A=A.slice(0,2)
console.log(A)

/*
b = A.slice(0, 5);
c = A.slice(6, 9);
d = A.slice(10);

console.log(b);
console.log(c);
console.log(d);
*/

let originalString = "Hello, World!";
let positionToRemove = 7; // Index of the character to remove

let stringWithoutCharacter = originalString.slice(0, positionToRemove) + originalString.slice(positionToRemove + 1);

console.log(stringWithoutCharacter);
