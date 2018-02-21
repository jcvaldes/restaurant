;
(function() {
    let sticky = false
    let currentPosition = 1
    const image_counter = parseInt($("[data-name='image-counter']").attr("content") - 1);
    // $("#sticky-navigation").removeClass("hidden")
    // $("#sticky-navigation").slideUp(0)
    setInterval(() => {

        if (currentPosition < image_counter) {
            currentPosition++;
        } else {
            currentPosition = 0;
        }
        $("#gallery .inner").css({
            left: "-" + currentPosition * 100 + '%'
        })
    }, 4000)
    $(window).scroll(() => {
        const inBottom = isInBottom()

        if (inBottom && !sticky) {
            sticky = true
            stickNavigation()
        }
        if (!inBottom && sticky) {
            sticky = false
            unStickNavigation()
        }
    })

    function stickNavigation() {
        $("#description").addClass("fixed").removeClass("absolute")
            // $("#navigation").addClass("hidden")
            // $("#sticky-navigation").removeClass("hidden")
        $("#navigation").slideUp("fast")
        $("#sticky-navigation").slideDown("fast")
    }

    function unStickNavigation() {
        $("#description").removeClass("fixed").addClass("absolute")
        $("#navigation").slideDown("fast")
        $("#sticky-navigation").slideUp("fast")
    }

    function isInBottom() {
        const $description = $("#description")
        const descriptionHeight = $description.height()
        return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
    }
})()