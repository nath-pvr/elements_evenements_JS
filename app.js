// querySelector

let baseElement = document.querySelector("p");
    baseElement.style.backgroundColor = 'white';




// getElementById  

document.getElementById("output").innerHTML =
(baseElement.querySelector("div span").innerHTML);


// getElementsByClassName  

let black = document.getElementsByClassName('black');

    for (valeur of black) {
        valeur.style.color = 'black';
    }



// getElementsByTagName

// let paras = document.getElementsByTagName("p");

//     for (valeur of paras) {
//         valeur.style.color = 'blue';
//     }


// getElementByName


const form = document.getElementsByName("name");
console.log(form);


// addEventListener()

let para = document.getElementById('event');

    let rosit = function() {
        para.classList.toggle('pink');
    }
    console.log(para);
para.addEventListener('click', rosit);


//  mouseover

let mouseOver = document.getElementById('mouseOver');

    let lumos = function(){
        this.style.color = 'orange'
    }

    let nox = function(){
        this.style.color = '#a6e7e7'
    }

mouseOver.addEventListener('mouseover',lumos);
mouseOver.addEventListener('click',nox);