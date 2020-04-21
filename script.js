const list = document.getElementById('ul-list')
const imgTag = document.getElementById('img-tag')

let fetchWork = function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                console.log(i, ': ', json[i].title)
                let a = document.createElement('li')
                a.innerHTML = json[i].title;
                list.appendChild(a)
            }
        })
}

let xhrWork = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        imgTag.setAttribute('src',json.message)
    })
}

document.getElementById("fetchButton").addEventListener("click", fetchWork);
document.getElementById("xhrButton").addEventListener("click", xhrWork);
