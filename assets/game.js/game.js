var counter = 0;
var wins = 0;
var loss = 0;

var targetnumber;
var gemsCollected = Math.floor(Math.random() * (1 - 12) + 1)

for (var i = 0; i < gemsCollected.length; i++) {
    var gemimage = $("<img>");

    gemimage.addClass("gem-image");

    gemimage.attr("data-gemvalue", gemsCollected[i]);

    $("#gems").append(gemimage);
}


// function play() {
    $("#start").on("click", function () {
        targetnumber = Math.floor(19 + Math.random() * (120 + 1 - 19));
        $("#target").text(targetnumber);
    });


$(".gem-image").on("click", function () {
    var gemsCollected = Math.floor(Math.random() * (12 - 1) + 1);
    gemsCollected = parseInt(gemsCollected);
    counter += gemsCollected;
    $("#Collected").text(counter)
    console.log(gemsCollected);

    if (counter === targetnumber) {
        alert("You win!");
        wins++
        $("#win").text(wins);
        // play()
        }

    else if (counter >= targetnumber) {
        alert("You lose!!");
        loss++;
        $("#losses").text(loss);
        // play();
    }
});
// }



