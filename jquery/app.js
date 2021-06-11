$('document').ready(() => {

let btn = $('<button>Click Me!</button>');
$('body').append(btn);
btn.click(function () {
    alert('What is going on??');
});

let textBtn = $('#newBtn');
let textBox = $('#textBox');
textBtn.click(function () {
    alert(textBox.val());
});

let hoverDiv = $('#hoverDiv');
hoverDiv.css({
    height: '99px',
    width: '99px',
    border: '1px solid black',
});
hoverDiv.hover(
    function () {
        hoverDiv.css({
            backgroundColor: 'red',
        });
    },
    function () {
        hoverDiv.css({
            backgroundColor: 'white',
        });
    }
);

let paragraph = $('<p>TOY STORY <br/> Original Story by <br/> John Lasseter Pete Docter Andrew Stanton Joe Ranft <br/> Screenplay by <br/>Joss Whedon Andrew Stanton Joel Cohen and Alec Sokolow<p/>');
$('body').append(paragraph);
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color+= letters[Math.floor(Math.random() *16)];
    }
    return color;
}
paragraph.click(function(){
    paragraph.css({
    color: getRandomColor(),
    });
});

let nameBtn = $('<button>Click for Name<button/>');
let nameDiv = $('<div></div>');
$('body').append(nameBtn);
$('body').append(nameDiv);
nameBtn.click(function () {
    nameDiv.append($('<span>Mr. Robot</span><br/>'))
});
let friendsBtn = $('<button>Click for Friends!</button>');
let friendsUl = $('<ul></ul>');
$('body').append(friendsBtn);
$('body').append(friendsUl);
let friends = ["Mickey", "Daisy", "Goofy", "Darkwing", "Scrooge", "McDuck", "Mayor", "King", "Queen", "Jack"];
let counter = 0;
friendsBtn.click(function () {
    if (friends[counter] == undefined) {
        alert("You have run out of friends!");
    } else {
        friendsUl.append($(`<li>${friends[counter]}</li>`));
        counter++;
    }
});
});