// Twitter
!function(d,s,id) {
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
  {js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);
}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


// bounce animation maker(google map)
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 52.516506, lng: 13.379621}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 52.516506, lng: 13.379621}
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


$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');

  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
      window.location.hash = href;
      });
    }
  return false;
  });

  // Stellar
  $.stellar();

  // Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    $('#item1').tooltip();
  });

  $('#button').on('click', function() {
    var comment = $('#message-box').val();
    $('#char-count').html(comment);
      if ($("#message-box").val() === "") {
        $("#message-box").css("border", "1px solid red");
      } else {
        $("#message-box").hide();
      };
      return false;
  });

  //Navbar transparent to solid effect ==================
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-inverse").css("background-color", "#0f0f0f").css("border-color", "#23395B").fadeIn(1000);
    } else {
        $(".navbar-inverse").css("background-color", "transparent").css("border-color", "white").fadeIn(1000);
    }
  });

  // $("#message-box").css("background-color", "red");

  $("#message-box").on("keyup", function(){
    var charCount = $("#message-box").val().length;
      console.log("charCount");
      $("#char-count").html(charCount);
      if( charCount > 20 ) {
        $("#char-count").css("color", "red");
      } else {
        $("#char-count").css("color", "black");
      };
  });

  // work section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
    <div class='col-md-3 col-sm-6 col-xs-12'>\
      <a href='" + works[i].url + "' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'>" + works[i].title + "</span>\
      </a>\
    </div>");

// display-hide project titles when hovering over images
    $(".work-img").mouseenter( function() {
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });

    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };
});