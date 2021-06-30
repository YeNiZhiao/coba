// event pada saat di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href')
    //tangkap elemen ybs
    
    var elementTujuan = $(tujuan);
    
    //pindahkan scroll
    $('html,body').animate({

        scrollTop: elementTujuan.offset().top - 50 
    },1000,'swing');

    
    e.preventDefault();
});


//parallax
//about
$(window).on('load',function(){
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});
$(window).scroll(function(){
    var wsScroll = $(this).scrollTop();
    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wsScroll/4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wsScroll/2 +'%)'
    })
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wsScroll/1.2 +'%)'
    })
    $('.contact').addClass('turun');
    //portfolio
    if(wsScroll > $('.portfolio').offset().top - 250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * (i+1))
        });
    }

});


