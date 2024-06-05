let input = "aman chaurasiya is a good boy";

function splitWord(input) {
  let splitResult = input.split(" ");
  splitResult.reverse();
  const result = splitResult.join(" ");
  console.log(result);
}
// splitWord(input);

function splitWordPosition(input) {
  console.log(input);

  let splitSentence = input.split(" ");

  splitSentence = splitSentence.map((singleWord) =>
    singleWord.split("").reverse().join("")
  );
  const result = splitSentence.join(" ");
  console.log(result);
}
splitWordPosition(input);
