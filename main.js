
var arrayMail = ['bruceSpringsteen@rockstar.com','eltonJohn@rockstar.com','rogerWaters@rockstar.com','paulMcCartney@rockstar.com','mickJagger@rockstar.com'];

var mailToCheck = prompt("Insert your mail address:");

for (var i = 0; i < arrayMail.length; i++) {
    if (mailToCheck == arrayMail[i]){
        if (arrayMail[i] == 'bruceSpringsteen@rockstar.com') {
            document.getElementById('rockstarContainer').setAttribute('class','show');
            document.getElementById('rockstar').innerHTML = '"BOSS"';
            document.getElementById("avatar").src = "images/bruce.jpeg";
        }
        if (arrayMail[i] == 'eltonJohn@rockstar.com') {
            document.getElementById('rockstarContainer').setAttribute('class','show');
            document.getElementById('rockstar').innerHTML = '"Elton"';
            document.getElementById("avatar").src = "images/elton.jpeg";

        }
        if (arrayMail[i] == 'rogerWaters@rockstar.com') {
                document.getElementById('rockstarContainer').setAttribute('class','show');
                document.getElementById('rockstar').innerHTML = '"Roger"';
                document.getElementById("avatar").src = "images/roger.jpeg";

        }
        if (arrayMail[i] == 'paulMcCartney@rockstar.com') {
            document.getElementById('rockstarContainer').setAttribute('class','show');
            document.getElementById('rockstar').innerHTML = '"Paul"';
            document.getElementById("avatar").src = "images/paul.jpeg";

        }
        if (arrayMail[i] == 'mickJagger@rockstar.com') {
            document.getElementById('rockstarContainer').setAttribute('class','show');
            document.getElementById('rockstar').innerHTML = '"Mick"';
            document.getElementById("avatar").src = "images/mick.jpeg";

        }
    }else {
        document.getElementById('rockstarContainer').setAttribute('class','show');
        document.getElementById('rockstar').innerHTML = 'unknown rockstar';
        document.getElementById("avatar").src = "images/rockstar.png";
    }

}
