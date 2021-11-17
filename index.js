// destructing the array and Object.
const numberArray = ['apple', 'orange', 'peach'];

const [fruit1, fruit2, fruit3] = numberArray;



const person = {
    name: 'abcde',
    age: 10,
    gender: 'm'

};

const { name, age } = person;


// spread operator on the array and object
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2]

console.log(array3);



const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};
const educationDetails = {
    degree: 'xyz',
    college: 'anc',
}
const personDetails = {...basicDetails, ...educationDetails }

console.log(personDetails);

//javascript function to find and return the largest number in an array

function largestNumber(numArray) {
    largest = numArray[0];

    for (let i = 0; i < numArray.length; i++) {
        if (largest < numArray[i]) {
            largest = numArray[i];
        }
    }
    return largest;
}

//javascript function to return updated salaries of employees.

function updateSalaries(empoyleesArray, percent) {
    let result = []

    for (let i = 0; i < empoyleesArray.length; i++) {
        let temp = empoyleesArray[i] + ((percent) * empoyleesArray[i] / 100)
        result.push(temp)
    }
    return result;
}