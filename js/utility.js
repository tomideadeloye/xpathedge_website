
//if (
//    "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "IntersectionRation" in window.IntersectionObserverEntry.prototype
//) {
//    let observer = new IntersectionObserver (entries =>  {
//        if (entries[0].boundingClientRect.y < 0) {
//            //            document.body.classList.add("hi");
//            alert('seen')
//        }else {
//            //            document.body.classList.add("hi");
//            alert('not seen')
//        }
//    });
//
//    observer.observe(document.querySelector("#section_4"));
//}

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
