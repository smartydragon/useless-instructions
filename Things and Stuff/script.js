document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("colorButton").addEventListener("click", alertColor);
  document.getElementById("timeButton").addEventListener("click", alertTime);
  document.getElementById("pressButton").addEventListener("click", doSomething);
  document.getElementById("jokeButton").addEventListener("click", playJoke);
  document.getElementById("textButton").addEventListener("click", alertText);
  document.getElementById("openSiteButton").addEventListener("click", () => {
    window.open("https://thingsandstuf.netlify.app/", "_blank");
  });
});

function doSomething() {alert("Button pressed. Thank you."); }

function playJoke() {  alert("Because he was outstanding in his field!"); }

function alertColor() { const color = document.getElementById("colorPicker1").value; 
  alert("The selected color is: " + color); }

  function alertTime() { const time = document.getElementById("Datetime1").value;
  alert("The selected time is: " + time); }

  function alertText() {
  const text = document.getElementById("textBox1").value;
  if (text !== "") {
    alert("The message is: " + text);
  } else {
    alert("You haven't typed anything in the box.");
  }
   }



