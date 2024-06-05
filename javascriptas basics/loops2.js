const programming = ["js", "rb", "py", "java", "cpp"];
programming.forEach(function (item) {
  // console.log(item + " ABC");
});

const result = (item) => {
  // console.log(item + " Aman");
};

// programming.forEach(result);
// programming.forEach(result1);

// function result1(item) {
//   console.log(item + " ashish");
// }

programming.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoading = [
  { languageName: "javascripts", languageFileName: ".js" },
  { languageName: "java", languageFileName: ".java" },
  { languageName: "pythn", languageFileName: ".py" },
  { languageName: "kotlin", languageFileName: ".kt" },
];

myCoading.forEach((item, index, obj) => {
  console.log(item.languageName, index, "obj is:-", obj);
});
