// var a = $('.a')
//     .css({
//         color: 'red',
//         background: 'blcak',
//         border: '15px solid gray'
//     })
//     .addClass('black')
//     .removeClass('black')
// console.log(a.hasClass('blcak'))

// a.hide()
// a.show()
// a.fadeOut()
// a.fadeIn(1000)
// a.slideUp(2000)
// a.slideDown(1000)

var board = $('#board')

function toggle() {
    if(board.hasClass('active')) {
        board.removeClass('active')
    } else {
        board.addClass('active')
    }
}
setInterval(toggle, 200);
