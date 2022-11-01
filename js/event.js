const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
    const rdmColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rdmColor;
}