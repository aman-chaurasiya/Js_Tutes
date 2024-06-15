const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(color);
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  document.body.style.backgroundColor = randomColor();
}, 1000);
