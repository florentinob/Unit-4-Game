$(document).ready(() => {

    
    let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randomNumber').html(randNumber);

    
    let ruby = Math.floor(Math.random() * 9) + 1;
    let sapphire = Math.floor(Math.random() * 9) + 1;
    let amethyst = Math.floor(Math.random() * 9) + 1;
    let emerald = Math.floor(Math.random() * 9) + 1;

    
    let wins = 0; 
    let losses = 0;  

    let totalScore = 0;
    $('#totalScore').text(totalScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#ruby').click(() => {
        totalScore = totalScore + ruby;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#sapphire').click(() => {
        totalScore = totalScore + sapphire;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#amethyst').click(() => {
        totalScore = totalScore + amethyst;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emerald').click(() => {
        totalScore = totalScore + emerald;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

  
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randomNumber').html(randNumber);
        ruby = Math.floor(Math.random() * 9) + 1;
        sapphire = Math.floor(Math.random() * 9) + 1;
        amethyst = Math.floor(Math.random() * 9) + 1;
        emerald = Math.floor(Math.random() * 9) + 1;
    }
});