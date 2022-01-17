/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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

  let excuse = [];

  const RandomIndex = arr => Math.floor(Math.random() * (arr.length - 1));
  const Item = (arr, i) => arr[i];
  const JoinArrElements = (arr, delimiter) => arr.join(delimiter);

  const randomExcuse = array_of_arrays => {
    for (let value of array_of_arrays) {
      let item = Item(value, RandomIndex(value));
      excuse.push(item);
    }

    return JoinArrElements(excuse, " ");
  };

  // const array = [1,2,3,4];

  // // calcular un indice aleatorio
  // const RandomIndex = (arr) => Math.floor(Math.random()*arr.length);
  // // calcular un valor aleatorio
  // const RandomItem = (arr, i) => arr[i];

  // console.log(RandomItem(array, RandomIndex(array)))

  // const generate_random_excuse = (who, action, what, when) => {
  //   var random_who = who[Math.floor(Math.random() * (who.length - 1))];
  //   var random_action = action[Math.floor(Math.random() * (action.length - 1))];
  //   var random_what = what[Math.floor(Math.random() * (what.length - 1))];
  //   var random_when = when[Math.floor(Math.random() * (when.length - 1))];

  //   return (
  //     random_who + " " + random_action + " " + random_what + " " + random_when
  //   );
  // };

  // console.log(generate_random_excuse(who, action, what, when));

  console.log(randomExcuse([who, action, what, when]));
};
