/* .forEach() is fairly simple, this will execute the same code for each element of an array. For this example, I will be using ES6 arrow function but I will still show you the older way of doing it at the bottom.*/

/* Here I created a variable called "fruits" and I assigned an array to it with the following fruits within: mango, papaya, pineapple, and apple. I will use this array to conduct a .forEach()  on it in order to display what I want to display. In this case, its each of the fruits in the array*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

/* Like mentioned above, using a .forEach() function, I iterate over the fruits array. As a parameter I pass in "fruit" which will be my let i = 0 type of ordeal in a for loop. So I can call upon the fruits when I say 'fruit' like you would using i in a for loop.*/

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`)); //Output below
/* 
  I want to eat a mango
  I want to eat a papaya
  I want to eat a pineapple
  I want to eat a apple
*/

/* Yes yes, I know for apple is should be an apple. but this isn't english class now is it? You could make a for loop which detects if the fruit is apple to add an instead of a if it really bothers you that much*/

/* Now the following is the older way of doing a .forEach() , I personally thing the arrow function syntax looks sexier and is much easier to do and write */

/* The following variable contains an array of things I need to get at the grocery store. I know what you are thinking, grocery store? more like liquor store! Plus, this is written in January 1st, im still celebrating the new year for 2021! */
const groceries = ['Modelo', 'salt', 'Jack Daniels', 'limes', 'Bacardi', 'Coca-Cola', 'Southern Comfort'];

groceries.forEach(function(liquorItem){
  console.log(' - ' + liquorItem);
})