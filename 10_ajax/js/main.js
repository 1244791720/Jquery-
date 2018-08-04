
$.ajax({
    url : 'https://api.github.com.users/biaoyansu',
    method: 'get',
    data: {
        username: 'wdd',
        password: 'asdf',
    },
    success: function(data) {
        console.log('成功')
    },
    error : function(){
        console.log('失败')
    }
})
// var form = $('#search')
// var input = $('#username')
// var result = $('#result')
// var username
//
// form.on('submit', function(e) {
//     e.preventDefault()
//     console.log("1",1)
//     username = input.val()
//     $.ajax('https://api.github.com.users/' + username)
//         .done(function(data) {
//             var html =
//                 '<div>用户名' + data.login + '</div>'
//                 '<div>介绍' + data.bio + '</div>'
//             result.html(html)
//         })
// })
