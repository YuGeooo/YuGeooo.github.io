let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image2.png'){
        myImage.setAttribute('src', 'images/image3.png');
        }else{
            myImage.setAttribute('src','images/image2.png');
        }
}

let myBottom = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
    let myName = prompt('请输入你的名字:');
    if(!myName || myName === null){
        setUsername()
    }else{  
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎，' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = '欢迎，' + storeName;
}

myBottom.onclick = function(){
    setUsername();
}