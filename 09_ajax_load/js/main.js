var trigger = $('#trigger')
var card = $('#card')
var loaded = false
trigger.on('click', function() {
    card.load('card.html')
    if (card.is(':visible')) {
        card.slideUp()

    } else {
        if (!loaded) {
            card.load('card.html')
            loaded = true
        }
        card.slideDown()
    }

})
