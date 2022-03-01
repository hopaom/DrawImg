// 처음에는 빈 박스만 나오게
$(document).ready(function () {
    $('#confirm').hide();
});


// 이미지 클릭하면 빈 박스에서 이미지, 버튼 나오게
$('li').click(function(){
   $('#box').hide();
   $('#confirm').show();
});


// 더미 이미지 => 나중에 api 보고 수정하기
let imgs = ['http://cdn.jejudomin.co.kr/news/photo/201312/45994_32005_1257.jpg',
'https://mblogthumb-phinf.pstatic.net/20160907_70/mrbobmath_1473230417589u35Cq_PNG/NYCS-bull-trans-2.svg.png?type=w2',
'https://previews.123rf.com/images/imageflow/imageflow1502/imageflow150200003/36942514-3d-%EC%88%AB%EC%9E%90-3-%EA%B8%88.jpg',
'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADt7e06Ojr29vaEhITw8PBRUVEUFBTf398QEBBnZ2fBwcHj4+MMDAzLy8vn5+cgICCwsLAaGhqoqKhBQUFJSUnMzMx6enrW1ta3t7eQkJCZmZkZGRl+fn6KioozMzNwcHBVVVVdXV0rKyuYmJhg87qcAAAE9UlEQVR4nO3dbUOiUBAF4EQy31A0y6jctJf//xd3a9tKOcOde8OY4875ChhPO0vEATo783g8Ho/H4/F4PB6Px0rKaSDzvOtd/F6yp1lzetus6338XlazXiDkwmoTAvb61MLsKQgkF4ZnlFxYLcJAauFgogBSC5eKGaUWjjQzyiwc7FRAYuFyfOLCQjejvML8RgmkFd6qjqPEQvWMsgrzX2ogqfB2eOLCcqsHUgrz8wggpXAaMaOUwrIfAyQU5g9RQELhVHk+Sissr+KAdML8LhJIJ5yHLx9yC8vrWCCZMH+JBpIJ11E/6wmF5UU8kEqY3ycAqYTr6OMomTB7TAESCdNmlElYXZ64UFMVcgs1VSG1MHVGaYTJM0ojTJ5RFiGsCp9PSAjr7MWL7jScQgjr7HvlBRsGIZzR63KpAjIIYZ09XGvP4giEsM6+y7XXpOwLYVV4VarbC/NCWGcP5/qe27zwFs3oQ669I8q+EB5H++WfJZnyoo1xIayzh9PXRZny8r5xIZzR87c7t7VFsG1hgc49t8XbslJ5Xcq0EP5AmE3/LjwJIayzf70/XVAor39bFsI6+7l4XzriF8I6e3z7b3HFf2/iHBFuPp6AWdMLYZ29KD6Ww28AkxD+6jBbfq6gvWPBrHCODiS7wecK2vsvrQrxjI6+rKG7U9+sENbZX2dUf4HRqBBWhZMvM3qWcwthnb03o/qyzaYQzuhqbxX1rUMmhRU6ju7NKLkQ1tn7Mxpxi6JBIf4ftjp4YFl9o7BBIawKnw73k1iIZ7Q6XI1YuEK7eV97qJ5XCGf0sb6XtEJYZ29qM0oshOdiL+DFD6xCeIn7ogRrkgphF7FZo1VJhfB3PjSjrEKhzobrUgphnY1nlFQIZ/ROeIEOo1Cqs3EIhbC1Hs/F1fmEYp2NwyeEM7qVZpRQ2FBnCxuwCafoOHre8CIyNmGBSvlt0bAFmbCxzo7YxK6wsc7G4RI219k4VMJAnS1sxCSEVeFN4IWOTMJQnY1DJIQFxHgZ3IxHCJ983Q1Cm/EI4dPZhzUMCI0QP50dnFEi4Rpd4p4EZ5RHmCXOKI0QVoUHdba0KYcQ1jCaGWURwqrwUjOjJMJvzCiJUFdnC2EQDlBVWK+zhRAIc2WdLW1uXwhf5AzqbCH2hRFVIYx9Iayz1TNKIByh4yiss4VYF8IZHepn1L4wos4WYlwYU2cLsS3Md2BPNmJViD/DtDCqzhZiWghnVKyzhVgWRtbZ0qcYFsKHXeQ6W4hhIXzytR85o5aF0XW29DlmhdF1thCzQlxnR8+oXSHcr1BVqP8kA0L4WGRznS3EqBDW2cGqEMamENbZs5QZtSqEL3IO1dlCTArDT75GxKIwsc6WPs2gENbZiTMaI1QVPW0E1tnjaTFKSlHtlMJtVf8SSUfvUIRnPjfD1KjfFVn/ErNFwklUMLDO7iqzI/wjwjq7s4zbF6a+yPlIOYLQ1IweQ5j4svGjpX2h9m05P5X2hdq35fxUXOhCF3YfF7rQhd3HhS50YfdxoQtd2H1c6EIXdh8Xxmed/ie3jpL2e4vqov0o/2RXb1zf9DrmhnJlBq0nUzeko7y+devAI8Riy91uXOhC+3GhC+3HhS60Hxe60H5c6EL7caEL7ceFLrQfF7rQflzoQvtxoQvtx4UutB8XutB+/gPhaqJLwtt9jATcJQNDC/R4PK/5DY4Ib713z1wnAAAAAElFTkSuQmCC']


//해당 리스트 아이디를 imgs의 인덱스로 치환하기
$('li').click(function(){
   var id = $(this).attr('id');
   var imgurl = imgs[id-1]
   $('#stylized-image').attr("src", imgurl);
});