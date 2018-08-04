var nn = $('#nickname')
nn.css('color','black')
nn.val('您可以在这里输入弹幕')
alert(nn.val())
nn.on('focus', function() {
    nn.val('')
    nn.css('color','black')
})
nn.on('blur', function() {
    nn.val('您可以在这里输入弹幕')
    nn.css('color', 'gray')
})
