$(document).ready(function () {
    $('#confirm').hide();
    show_stylized();
});


function show_stylized() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:5000/style',
        data: {},
        success: function (response) {
            const rows = response['url']
            const urls = []
            for (let i = 0; i < rows.length; i++) {
                const url = rows[i]['url']
                urls.push(url)}
            console.log(rows)
        }
    });
}


$('li').click(function(){
   var idx = $(this).attr('id');
   var imgurl = urls[idx]
   $('#stylized-image').attr("src", imgurl);
   $('#box').hide();
   $('#confirm').show();
});
