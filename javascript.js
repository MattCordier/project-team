

$(document).ready(function(){
    $(".fade-right").animate({left:400, opacity:"show"}, 1500);
});

$(document).ready(function(){
    $(".fade-left").animate({right:400, opacity:"show"}, 1500);
});


// STORY  

$(document).ready(function(){
    $(".story-btn").click(function(){
        $(".mc-story").slideToggle(1000, 'swing');
    });
});




// $(function(){  // $(document).ready 
//   $('#fadein').fadeIn(3000);
// });





