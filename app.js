document.addEventListener('DOMContentLoaded', function() {
let container = document.createElement('div');
let textinput = document.getElementById("text-input")
let submitBtn = document.getElementById("submit-Btn")
let hoverDiv = document.getElementById("hover-div")
let paragraph = document.createElement('p')
let nameDiv = document.createElement('div')
let nameBtn = document.createElement('button')
let friendBtn = document.createElement('button')
friendBtn.innerText = 'Friend'
nameBtn.innerText = 'friend'
paragraph.innerText = 
'TOY STORY Original Story by John Lasseter Pete Docter Andrew Stanton Joe Ranft Screenplay by Joss Whedon Andrew Stanton Joel Cohen and Alec Sokolow';
container.appendChild(paragraph);

paragraph.addEventListener('click', function(){
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      paragraph.style.color = getRandomColor();
});


container.id = "container";
document.body.appendChild(container);
let alertButton = document.createElement('button');
alertButton.innerHTML = 'Click Me!';
container.appendChild(alertButton);
hoverDiv.style.height = '100px';
alertButton.addEventListener('click', function example() {
    alert ("What is going on??")
})

submitBtn.addEventListener('click', function() {
    alert(textinput.value);
})

hoverDiv.addEventListener('mouseover', function() {
    hoverDiv.style.backgroundColor = 'blue';
});
hoverDiv.addEventListener('mouseleave', function() {
    hoverDiv.style.backgroundColor = '';
});
container.appendChild(nameBtn);
nameBtn.addEventListener('click', function() {
    let nameSpan = document.createElement('span');
    nameSpan.appendChild(document.createTextNode('Donald'))
    nameSpan.style.marginRight = '30px';
    nameDiv.appendChild(nameSpan);
    container.appendChild(nameDiv);
});
container.appendChild(friendBtn);
let counter = 0;
friendBtn.addEventListener('click', function() {
    let friendArr = ['Daffy', 'Mickey', 'Daisy', 'Goofy', 'Darkwing', 'Louie', 'Versace', 'Gucci', 'Apple', 'Twitter'];
    let friendUL = document.createElement('ul');
    let friendLI = document.createElement('li').appendChild(document.createTextNode(friendArr[counter++]));
    friendUL.appendChild(friendLI);
    container.appendChild(friendUL);
});



});