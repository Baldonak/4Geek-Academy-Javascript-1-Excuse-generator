/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let dataset = [who, action, what, when];
let excuse = [];

const RandomIndex = arr => Math.floor(Math.random() * arr.length);
const Item = (arr, i) => arr[i];
const JoinArrElements = (arr, delimiter) => arr.join(delimiter);
const randomExcuse = array_of_arrays => {
  for (let value of array_of_arrays) {
    let item = Item(value, RandomIndex(value));
    excuse.push(item);
  }
  return JoinArrElements(excuse, " ");
};

window.onload = function() {
  const excuseDOM = document.querySelector("#excuse");
  excuseDOM.innerHTML = randomExcuse(dataset);
};
