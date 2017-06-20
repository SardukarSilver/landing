$(window).on('resize scroll', function() {
var width = $(document).width();

if ($(window).scrollTop()) {
$('header').addClass('shrink');
}
else {
$('header').removeClass('shrink');
}
if (width < 768) {
$('header').removeClass('shrink');
}
});
