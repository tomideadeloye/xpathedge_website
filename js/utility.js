$(window).scroll(function() {

    // selectors
    var $window = $(window),
        //        $body = $('body'),
        $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on panel with color-
            //            $panel.removeClass(function (index, css) {
            //                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            //            });

            // Add class of currently active div
            $panel.addClass('color-' + $(this).data('color'));
        } else {
            //            $panel.removeClass('color-' + $(this).data('color'));
        }
    });

}).scroll();


$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 840 && y <= 1450) {
        $('.social_share').addClass('add_fixed');
    } else {
        $('.social_share').removeClass('add_fixed');
    }

    console.log(y)
})


function pageTransition() {

    var tl = gsap.timeline();

    tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})

    tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})

    $("html, body").animate({ scrollTop: 0 }, "slow");
}


function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n)
    })
}

if (typeof $("div").data('barba') !== 'undefined') {
    barba.init({
        sync: true,
        transitions: [{
            sync: true,
            name: 'opacity-transition',
            async leave(data) {
                const done =  this.async();

                pageTransition();
                await delay(1500);
                done()
            },
        }]
    });

    barba.hooks.after(() => {
        AOS.init();
    });
}






