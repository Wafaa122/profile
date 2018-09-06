// Twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// bounce animation maker(google map)
var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 52.516506,
            lng: 13.379621
        }
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 52.516506,
            lng: 13.379621
        }
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


$(document).ready(function() {


    $("#button").on("click", function() {
        console.log("clicked");
        var name = $('#name').val();
        var phone = $('#mobile').val();
        var email = $('#email').val();
        var message = $('#message').val();
        console.log("comment");
        $('#visible-username').html(name);
        $('#visible-mobile').html(phone);
        $('#visible-emailadress').html(email);
        $('#visible-comment').html(message);
        $('#name').hide();
        $('#mobile').hide();
        $('#email').hide();
        $('#message').hide();
        return false;


    });
    $(".message-box").css("border", "2px solid red");
    $(".message-box").css("background", "#FFEBCD");
    $("#message").on("keyup", function() {
        console.log("keyup happened"); //here we make sure we're catching the keyup
        console.log(charCount);
        var charCount = $("#message").val().length;
        // in here is where the rest of our code for this Exercise will go         
        $("#char-count").html(charCount);
        if (charCount > 24) {
            $("#char-count").css("color", "#FF0000");
        } else if (charCount === 10) {
            $("#char-count").css("font-size", "54px");
        } else {
            $("#char-count").css("color", "#006400");
        };
    });
});
// work section
for (var i = 0; i < works.length; ++i) {
    $("#work").append("\
    <div class='col-md-3 col-sm-6 col-xs-12'>\
      <a href='" + works[i].url + "' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'>" + works[i].title + "</span>\
      </a>\
    </div>");

    // display-hide project titles when hovering over images
    $(".work-img").mouseenter(function() {
        $(".info", this).show();
    }).mouseleave(function() {
        $(".info", this).hide();
    });

    var images = $("#work img");
    if (i % 2 === 0) {
        $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
        $(images[i]).css("border", "2px solid salmon");
    };
};


var $root = $('html, body');

$('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');

    if (href != undefined && href != '#') {
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function() {
            window.location.hash = href;
        });
    }

    return false;
});