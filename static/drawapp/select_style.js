$(document).ready(function(){
    $('#confirm').hide();
    load_style()
    })

const urls = []

function load_style(){
    $('#stylized-image').hide()
    var src = jQuery('#origin').attr("src");
    var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

    $.ajax({
        url: 'http://127.0.0.1:5000/style',
        data: {'url': src},
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        },
        method: "POST",
        success: function (response){
            imgs = response['result']
            for (i=0; i<imgs.length; i++){
                urls.push(imgs[i])
            }
            $('.loading').hide()
            $('#confirm').show()
            $('#stylized-image').attr("src", urls[0])
            $('#stylized-image').show()
            alert('스타일 적용이 완료되었습니다! \n오른쪽 스타일을 눌러보세요!')
        }
    })
}

$('li').click(function(){
   var idx = $(this).attr('id');
   var imgurl = urls[idx]
   $('#stylized-image').attr("src", imgurl);
});

function next(){
    var img = jQuery('#stylized-image').attr("src")
    img = img.split('/')
    img_code = img[4].split('.')
    window.location.replace(`http://127.0.0.1:8000/pipo/${img[3]}/${img_code[0]}`)
}
