
//Clicking the "contact" tab brings you to the bottom of the page

$(document).ready(function(){
    $("#contact-tab").click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
    });
});

//Clicking "back to top" brings you to the top of the page

$(document).ready(function(){
    $("#to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0}, "slow");
    });
});

// This changes the word in the footer

$(document).ready(function() {

    var words = ["Exciting", "Memorable", "Breathtaking", "Exhilarating", "Intriguing"];
    var index = 0;

    function changeWord(){
        $("#attention-grabber").fadeOut(500, function(){
            $(this).html(words[index] + "<span>!</span>").fadeIn(500);
        })

        index = (index + 1) % words.length;
    }

    changeWord();

    setInterval(changeWord, 3000);


});