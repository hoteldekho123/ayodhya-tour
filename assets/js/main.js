// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar").classList.add('fixed-navbar');
        document.getElementById("scrolltop").classList.add('fixed-scroll');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
        document.getElementById("scrolltop").classList.remove('fixed-scroll');
    }
}


// read more js start 
function readMore(ele,eve){
  eve.preventDefault();
  var txt = document.querySelector(".read_more_text");
  txt.classList.toggle("show-few-lines");
  
  if(txt.classList.contains("show-few-lines")){
      ele.innerText = "Read More";
  }else{
      ele.innerText = "Read Less";
  }
}
function readMore2(ele,eve){
    eve.preventDefault();
    var txt = document.querySelector(".read_more_text2");
    txt.classList.toggle("show-few-lines");
    
    if(txt.classList.contains("show-few-lines")){
        ele.innerText = "Read More";
    }else{
        ele.innerText = "Read Less";
    }
}
function readMore3(ele,eve){
    eve.preventDefault();
    var txt = document.querySelector(".read_more_text3");
    txt.classList.toggle("show-few-lines");
    
    if(txt.classList.contains("show-few-lines")){
        ele.innerText = "Read More";
    }else{
        ele.innerText = "Read Less";
    }
}
function readMore4(ele,eve){
    eve.preventDefault();
    var txt = document.querySelector(".read_more_text4");
    txt.classList.toggle("show-few-lines");
    
    if(txt.classList.contains("show-few-lines")){
        ele.innerText = "Read More";
    }else{
        ele.innerText = "Read Less";
    }
}
// read more js end

// counter js 
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

// video js 
jQuery(document).ready(function() {
	jQuery('.play i').click(function(event){
	   event.preventDefault();
	  //var url = $(this).html(); //this will not work	
	   $(".js-video").append('<iframe class="h-100 w-100"  allow="autoplay" src="https://www.youtube.com/embed/lyFazCoV7UI?si=Y_zilpDbRj_DfzO5?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
		$(this).hide();
		//$('video-poster').css('z-index','-1');
		
	});
});

// input js 
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


// navbar active class 
$( '.navbar .navbar-nav a' ).on( 'click', function () {
	$( '.navbar .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});