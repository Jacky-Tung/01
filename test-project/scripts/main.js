const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/labixiaoxin.jpeg'){
        myImage.setAttribute('src','images/labixiaoxin2.jpeg');
    }
    else{
        myImage.setAttribute('src','images/labixiaoxin.jpeg');   
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `蜡笔小新, ${myName}`;
    if(!localStorage.getItem('name')){
        setUserName();
    } else {
        const storedName = localStorage.getItem('name');
        myHeading.textContent = `蜡笔小新, ${storedName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}

