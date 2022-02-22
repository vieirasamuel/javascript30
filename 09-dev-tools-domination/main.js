const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'beautiful');
// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red;');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('error');

// Info
console.info('Some info here');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`); //console.groupCollapsed
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/vieirasamuel')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
  });

console.table(dogs);
