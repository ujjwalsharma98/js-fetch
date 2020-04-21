
const list = document.getElementById('ul-list')
const imgDiv = document.getElementById('img-div')
const imgTag = document.getElementById('img-tag')

//------------------------------------------------------------------------clear data

let clearData = function(){
    imgDiv.innerHTML = '';
    list.innerHTML = '';
}

//-------------------------------------------------------------------------fetch list

let fetchWork = function() {
    clearData()
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let a = document.createElement('li')
                a.innerHTML = json[i].title;
                list.appendChild(a)
            }
        })
}

document.getElementById("fetchButton").addEventListener("click", fetchWork);

//--------------------------------------------------------------------------fetch image

let fetchDog = function() {
    clearData()
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            let img = document.createElement('img');
            img.setAttribute('src', json.message)
            imgDiv.appendChild(img)
        })
}

document.getElementById("dogFetch").addEventListener("click", fetchDog);

//----------------------------------------------------------------------------xhr image

let xhrDog = function() {
    clearData()
    var xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function () {
        var parsedData = JSON.parse(xhrRequest.response)
        // imgTag.setAttribute('src', parsedData.message)
        let img= document.createElement('img')
        img.setAttribute('src', parsedData.message)
        imgDiv.appendChild(img)
    }
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true)
    xhrRequest.send()
}

document.getElementById("xhrButton").addEventListener("click", xhrDog);

//-------------------------------------------------------------------------------var

let varWork = function() {
    clearData()
    for (var i = 0; i < 5; i++) {
        let a = document.createElement('li')
        a.innerHTML = i
        list.appendChild(a)
    }
    let a = document.createElement('li')
    a.innerHTML = i
    list.appendChild(a)
}

document.getElementById("varButton").addEventListener("click", varWork);

//-------------------------------------------------------------------------------let

let letWork = function() {
    clearData()
    for (let i = 0; i < 5; i++) {
        let a = document.createElement('li')
        a.innerHTML = i
        list.appendChild(a)
    }
    let a = document.createElement('li')
    a.innerHTML = i
    list.appendChild(a)
}

document.getElementById("letButton").addEventListener("click", letWork);