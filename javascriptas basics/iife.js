(function chai() {
  console.log(`DB CONNECTED`);
})();
(() => {
  console.log(`DB CONNECTED TWO`);
})();

// two iife in a same file, semicollon is mandatory;

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Aman Chaurasiya");
