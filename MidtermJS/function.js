function colorchanger(){
    var body =document.body;
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
}
document.getElementById('colorchanger').addEventListener('click', colorchanger);
