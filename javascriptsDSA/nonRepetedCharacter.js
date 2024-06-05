let input = "aman chaurasiya ";

let firstNonRepetedCharacter = (input) => {
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = obj[char] = 1;
    }
  }
  let keys = Object.keys(obj);
  console.log(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (obj[key] === 1) {
      console.log(` non repeting char is ${key}=> ${obj[key]}`);
    }
    if (obj[key] > 1) {
      console.log(`  repeting char is ${key}=> ${obj[key]}`);
    }
  }
};
firstNonRepetedCharacter(input);
