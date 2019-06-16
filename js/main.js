$( document ).ready(function() {
    ga('send', 'pageview', new Date()) ;
    $('#date').text((new Date()).toDateString());
});

$('#resume').click(function() {
	ga('send', 'event', 'header', 'click', 'resume') ;
})

$('#linked-in').click(function() {
	ga('send', 'event', 'header', 'click', 'linked-in') ;
})

$('#github').click(function() {
	ga('send', 'event', 'header', 'click', 'github') ;
})

$('#website').click(function() {
	ga('send', 'event', 'header', 'click', 'website') ;
})

$('#header-name').click(function() {
	ga('send', 'event', 'header', 'click', 'anubhav tomar') ;
})

$('#email').click(function() {
	ga('send', 'event', 'header', 'click', 'email') ;
})

$('#tel-phone').click(function() {
	ga('send', 'event', 'header', 'click', 'tel-phone') ;
})

$('#stony').click(function() {
	ga('send', 'event', 'experience', 'click', 'stony') ;
})

$('#homebell').click(function() {
	ga('send', 'event', 'experience', 'click', 'homebell') ;
})

$('#oyo').click(function() {
	ga('send', 'event', 'experience', 'click', 'oyo') ;
})

$('#travelclinic').click(function() {
	ga('send', 'event', 'experience', 'click', 'travelclinic') ;
})

$('#drdo').click(function() {
	ga('send', 'event', 'experience', 'click', 'drdo') ;
})