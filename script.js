const list = document.getElementById('ul-list')
const imgTag = document.getElementById('img-tag')
const dogImage = document.getElementById('dog-image')

let fetchWork = function () {
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

let fetchDog = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            imgTag.setAttribute('src', json.message)
        })
}

let xhrDog = function () {
    var xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function(){
        var parsedData = JSON.parse(xhrRequest.response)
        dogImage.setAttribute('src', parsedData.message)
    }
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true)
    xhrRequest.send()
}

document.getElementById("fetchButton").addEventListener("click", fetchWork);
document.getElementById("dogFetch").addEventListener("click", fetchDog);
document.getElementById("xhrButton").addEventListener("click", xhrDog);
