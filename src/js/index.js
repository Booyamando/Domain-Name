/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function(domain) {
  let pronoun = ["she", "you", "it", "that", "they"];
  let adjective = ["red", "quick", "happy", "obnoxious", "exciting"];
  let noun = ["Car", "Hat", "Bottle", "Table", "Chair"];

  let emptyArray = [];
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++)
      for (let z = 0; z < 5; z++)
        emptyArray.push(
          "www." + pronoun[i] + adjective[j] + noun[z] + ".com <br>"
        );
  console.log(emptyArray);

  document.querySelector(".domain").innerHTML = emptyArray;
};
