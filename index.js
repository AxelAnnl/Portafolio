$(document).ready(function() {
    var itemsSoft = $(".animated-item.soft");
    var itemsTech = $(".animated-item.tech");
    var duration = 1000;
    var delay = 2000;

    function animateItemsSoft(index) {
        if (index < itemsSoft.length) {
            itemsSoft.eq(index).fadeIn().delay(delay).fadeOut(0, function() {
                animateItemsSoft(index + 1);
            });
        }
    }

    function animateItemsTech(index) {
        if (index < itemsTech.length) {
            itemsTech.eq(index).fadeIn().delay(delay).fadeOut(0, function() {
                animateItemsTech(index + 1);
            });
        }
    }

    animateItemsSoft(100);
    animateItemsTech(100);
});