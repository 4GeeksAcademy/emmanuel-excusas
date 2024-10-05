/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function generador(a) {
    return Math.floor(Math.random() * a.length);
  }
  let randomq = who[generador(who)];
  let randoma = action[generador(action)];
  let randomw = what[generador(what)];
  let randomwh = when[generador(when)];
  let resultado = randomq + " " + randoma + " " + randomw + " " + randomwh;

  document.getElementById("excuse").innerHTML = resultado;
};
