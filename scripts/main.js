var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "images/tiger.jpg") {
      myImage.setAttribute ('src',"images/sova1.jpg");
    } else {
      myImage.setAttribute ('src','images/tiger.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Как думаешь ' + myName + '?';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Как думаешь ' + storedName + '?';
  }
  myButton.onclick = function() {
    setUserName();
  }
  