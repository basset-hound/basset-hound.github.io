let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunset.jpg') {
      myImage.setAttribute('src','images/sunset-2.jpg');
    } else {
      myImage.setAttribute('src','images/sunset.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'greetings, ' + myName;
  }
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'greetings, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}