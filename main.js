
var arrayMail = ['bruceSpringsteen@rockstar.com','eltonJohn@rockstar.com','rogerWaters@rockstar.com','paulMcCartney@rockstar.com','mickJagger@rockstar.com'];

var mailToCheck = prompt("Insert your mail address:");
var mailFound;
for (var i = 0; i < arrayMail.length; i++) {
    if (mailToCheck == arrayMail[i]){
        mailFound = mailToCheck;
    }
}

if (mailFound == 'bruceSpringsteen@rockstar.com') {
    document.getElementById('rockstarContainer').setAttribute('class','show');
    document.getElementById('rockstar').innerHTML = '"BOSS"';
    document.getElementById("avatar").src = "images/bruce.jpeg";
}else if (arrayMail[i] == 'eltonJohn@rockstar.com') {
    document.getElementById('rockstarContainer').setAttribute('class','show');
    document.getElementById('rockstar').innerHTML = '"Elton"';
    document.getElementById("avatar").src = "images/elton.jpeg";

} else if (arrayMail[i] == 'rogerWaters@rockstar.com') {
        document.getElementById('rockstarContainer').setAttribute('class','show');
        document.getElementById('rockstar').innerHTML = '"Roger"';
        document.getElementById("avatar").src = "images/roger.jpeg";

}else if (arrayMail[i] == 'paulMcCartney@rockstar.com') {
    document.getElementById('rockstarContainer').setAttribute('class','show');
    document.getElementById('rockstar').innerHTML = '"Paul"';
    document.getElementById("avatar").src = "images/paul.jpeg";

}else if (arrayMail[i] == 'mickJagger@rockstar.com') {
    document.getElementById('rockstarContainer').setAttribute('class','show');
    document.getElementById('rockstar').innerHTML = '"Mick"';
    document.getElementById("avatar").src = "images/mick.jpeg";

} else {
document.getElementById('rockstarContainer').setAttribute('class','show');
document.getElementById('rockstar').innerHTML = 'unknown rockstar';
document.getElementById("avatar").src = "images/rockstar.png";
}
