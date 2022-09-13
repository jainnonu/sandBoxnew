import React from "react";
import ReactDom from "react-dom";

const todayDate = new Date();
console.log(todayDate);

var greeting = "";

const changeStyle = {
  color: "blue"
};

if (todayDate.getHours() < 12) {
  greeting = "Good Morning";
  changeStyle.color = "red";
} else if (todayDate.getHours() <= 18) {
  greeting = "Good Afternoon";
  changeStyle.color = "green";
} else {
  greeting = "Good Evening";
}

ReactDom.render(
  <h1 style={changeStyle}>{greeting}</h1>,
  document.getElementById("root")
);
