var tabMenu = $("#tab-menu");

//컨텐츠 내용을 숨겨주세요!
tabMenu.find("ul > li > div").hide();
tabMenu.find("li.active > div").show();

//두번째 버튼 클릭 --> 모든 active 삭제 --> 내가 클릭한 버튼 active 추가
function tabList(e) {
    e.preventDefault(); //#의 기능을 차단
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("div").hide();
    //버튼을 클릭하면 ~ div를 보여주고
    //부모의 li 태그에 클래스를 추가하고
    //형제의 li 태그에 클래스를 제거하고
    //제거한 자식의 div 태그를 숨겨줌
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);