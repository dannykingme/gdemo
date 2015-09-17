;( function( window ) {

  var photos = {
    "louge": "img/louge.png",
    "mountain view": "img/mountainview.png",
    "air": "img/air.png",
    "racecar": "img/racecar.png",
    "desks": "img/desks.png",
    "lounge": "img/lounge.png",
    "hive": "img/hive.png",
    "logo": "img/logo.png"
  };

  for (var i in photos) {
    if (photos.hasOwnProperty(i)) {
      var thumb = "<a role='button' data-title='" + i + "' class='thumb make'><img src='" + photos[i] + "' class='thumbnail'/></a>";
      $(".gallery").append(thumb);
    }
  }

  $(".thumb").on("click touchend", function(e) {
    var url = $(this).children("img").attr("src");
    var current = $(this).attr("data-title");
    $(".app").addClass("opened");
    $('.photo').attr('src', url);
    $('.photo-title').html(current);
    e.preventDefault();
  });

  $(".close").on("click touchend", function(e) {
    $(".thumb").removeClass("active");
    $(".app").removeClass("opened show-tools");
    e.preventDefault();
  });

  $(".catch").on("click touchend", function(e) {
    $(".app").toggleClass("show-tools");
    e.preventDefault();
  });

})( window );