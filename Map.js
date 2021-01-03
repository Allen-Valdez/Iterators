/* The second iterator is .map(). When it is called on an array it takes an argument of a callback function and returns a new array. */

//This array is called animals and within it contains an array of animals
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/* I created a variable called secretMessage which will go through the array of animals and then returns the first letter of each animal to produce a secret message. So the thing is, .map() works the same way as a .forEach() but instead returns a new array. Not overwriting the original array. */
const secretMessage = animals.map(animal => {
  return animal[0]
})

console.log(secretMessage.join('')); // Outputs helloworld

/* Still dont get it? That's ok, lets try some numbers! Here I created a variable called bigNumbers which contains an array of the following: 100, 200, 300, 400, 500. Now when I call .map() on this, it will iterate over every single number in the array.  */
const bigNumbers = [100, 200, 300, 400, 500];

/* Since I am doing .map(), I will need to create a new variable which in this instance is called smallNumbers. Within this new variable, i conducted the .map() function on bigNumbers which again, will iterate through the bigNumbers array. */
const smallNumbers = bigNumbers.map(number => {
  //The return is saying take the number in bigNumbers and divide it by 100
  return number / 100
})

console.log(smallNumbers) // outputs [1, 2, 3, 4, 5]