/* BONUS! Alright, lets say you are trying to find the location of an element in an array. Let's also say hypothetically that this animals variable with an array assigned to it so looooooong! So we don't know the exact end nor if the element we are looking for is in index 500 */
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/* In this new variable created called foundAnimal, I am using the findIndex method to find the element 'elephant' within the array.*/
const foundAnimal = animals.findIndex(animal => {
  //This will check to see if there is an element in the array that matches 'elephant'
  return animal === 'elephant';
});
console.log(foundAnimal);

//This variable I created checks the array and find an element that begins with 'S'
const startsWithS = animals.findIndex(S => {
  return S[0] === 's';
});
console.log(startsWithS)