// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const today = new Date();
const year = today.getFullYear();

const hasOlderThan18 = people.some((person) => {
  return year - person.year > 18;
});

console.log(hasOlderThan18);

// Array.prototype.every() // is everyone 19 or older?

const isEveryoneOlderThan18 = people.every((person) => {
  return year - person.year > 18;
});

console.log(isEveryoneOlderThan18);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const id = 823423;

const result = comments.find((comment) => {
  if (comment.id === 823423) {
    return comment;
  }
});

console.log(result);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex((comment) => {
  if (comment.id === id) {
    return true;
  }
  return false;
});

console.log(index);

comments.splice(index, 1);
console.log(comments);
