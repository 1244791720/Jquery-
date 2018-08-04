var card = $('#card')
var cardTrigger = $('#card-trigger')

cardTrigger.on('click',
    function() {
        if (card.is(':visible')) {
            card.hide()
        } else {
            card.show()
        }
})
