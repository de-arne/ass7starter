function newsletterSignUp(){
    alert( "We're Not Ready For Sign-Ups...Yet." );
}

function toggleReadMore(event){
    $(this).prev().slideToggle();
    if( $(this).hasClass('readlink') ){
        $(this).html() == 'Read Less &lt;' ? $(this).html('Read More &gt;') : $(this).html('Read Less &lt;');
    }
    else{
        $(this).toggle();
    }
    event.preventDefault();
}

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
}

$(document).ready(function(){
    $('.newsletter-signup').on('click', '.button', newsletterSignUp);
    $('.toggle').click(toggleReadMore);
    $('.mobile-nav').click(toggleMobileNav);
});