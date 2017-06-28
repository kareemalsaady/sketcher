
$(document).ready(function(){

  var grid = window.prompt("How many in your grid?", "Enter No. Grid");


  var cellwidth = (400/grid)-2;
  var cellheight = (400/grid)-2;

  for (i=0; i<(grid*grid); i++){
    $('.wrapper').append('<div class="cell"></div>');

  }

  $('.cell').css("height", cellwidth);
  $('.cell').css("width", cellheight);


  $('.squares').on('click', function() {
      $('.cell').css('border-radius', '0');
    });
    $(".circles").on('click', function() {
      $('.cell').css('border-radius', '50%');
    });


  $('.cell').mouseover(function(){

    if($('.color[value=greyscale]').is(':checked')) {
      var r = 0;
      var g = 0;
      var b = 0;
      var rgba = "rgba("+r+","+g+","+b+", 0.9)";
    }

    if($('.color[value=random]').is(':checked')) {
      var r = Math.floor(Math.random() * 255) ;
      var g = Math.floor(Math.random() * 255) ;
      var b = Math.floor(Math.random() * 255) ;
      var rgba = "rgba("+r+","+g+","+b+", 0.9)";
    }

    if($('.color[value=erase]').is(':checked')) {
      var r = 255;
      var g = 255;
      var b = 255 ;
      var rgba = "rgba("+r+","+g+","+b+", 1)";
    }

    $(this).css("background-color",rgba);



    $('.reset').click(function() {
        location.reload();


    $('.erase').click(function() {
        $('<div class="cell"></div>').css("background-color","grey");
      });


    });

    });
  });
