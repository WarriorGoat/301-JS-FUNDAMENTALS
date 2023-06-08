////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function ques1(a, b) {
  let sum = a + b + x;
  return sum;
}
console.log("Question 1 ------------------");
console.log(ques1(2, 3));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const ques2 = (a, b) => {
  let sum = a + b + x;
  return sum;
};
console.log("Question 2 ------------------");
console.log(ques2(2, 3));

// 3. Write a function that returns another function. (use arrow functions please)
const ques3 = (a, b) => {
  return ques2(a, b);
};
console.log("Question 3 ------------------");
console.log(ques3(2, 3));

// *  4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;
  const insideFunc = (a) => y + a;
  return insideFunc;
};
console.log("Question 4 ------------------");
console.log(getFunction()(2));

// It still has access because the variable Y is at a higher level then  insideFunc.  This is standard behavior for variable scope.

// *  5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }
  return "success";
};

const ques5 = () => {
  try {
    return couldThrowError();
  } catch (Error) {
    return console.log(`sorry, there was an error`);
  }
};
console.log("Question 5 ------------------");
console.log(ques5());

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const ques6 = userData.map(
  (object) =>
    `id: ${object.id}, Favorite Foods: ${object.favorites.food.length}`
);
console.log("Question 6 ------------------");
console.log(ques6);

// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const ques7 = () => {
  const pizzaArray = userData.reduce(function (newArray, user) {
    if (user.favorites.food.includes("pizza")) {
      newArray.push(user.name);
    }
    return newArray;
  }, []);
  return pizzaArray;
};
console.log("Question 7 ------------------");
console.log(ques7());

// 8. Show an an example of a switch statement being used

const ques8 = () => {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    case 3:
      console.log(3);
      break;
    default:
      console.log(4);
  }
};
console.log("Question 8 ------------------");
ques8();

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const ques9 = (obj1, obj2) => {
  return (newObj = { ...obj1, ...obj2 });
};
let newUser = ques9(userPersonalData, userGameData);
console.log("Question 9 ------------------");
console.log(newUser);

// 10. Make a copy of your new user object but override the birthday to december 31st

const ques10 = (obj) => {
  return (newObj = { ...obj, birthday: "december 31st" });
};

newUser2 = ques10(newUser);
console.log("Question 10------------------");
console.log(newUser2);

// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const ques11 = (obj) => {
  return (newArray = [...obj.accomplishments]);
};
let newAccomplishments = ques11(userGameData);
console.log("Question 11------------------");
console.log(newAccomplishments);

//  12.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const ques12 = (obj) => {
  return (newArray = [...obj.favoriteThings.food]);
};
food = ques12(user);
console.log("Question 12------------------");
console.log(food);

// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const ques13 = (array) => {
  return (string = `${array[0]} & ${array[1]}`);
};
let someFood = ques13(food);
console.log("Question 13------------------");
console.log(someFood);

// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

let ques14 = (first, second, ...array) => {
  let name = first;
  console.log(name);
  let age = second;
  console.log(age);
  let food = array;
  console.log(food);
  return { name, age, food };
};
const [first, second, ...rest] = data;
console.log("Question 14------------------");
console.log(ques14(first, second, ...rest));

// 15. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const ques15 = (obj) => {
  let userName = obj.name;
  let favoriteFood = obj.favorites.needs.food;
  let favoriteThing = obj.favorites.wants.things[0];
  let secondfavoriteThing = obj.favorites.wants.things[1];
  return { userName, favoriteFood, favoriteThing, secondfavoriteThing };
};
console.log("Question 15------------------");
console.log(ques15(userInfo));

var fetchData1 = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database 1");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 20) < 2) {
          throw new Error("DB1 Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        console.log(error);
      }
    }, 4000);
  });

// module.exports =  fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData2 = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database 2");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 20) < 2) {
          throw new Error("DB2 Error!");
        }
        resolve({ name: "bill", age: 37 });
      } catch (error) {
        console.log(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ques16 = () => {
  try {
    fetchData1().then((result) => {
      console.log("Question 16");
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
};
console.log("Question 16------------------");
ques16();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ques17 = async () => {
  try {
    let result = await fetchData2();
    console.log("Question 17");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
console.log("Question 17------------------");
ques17();
