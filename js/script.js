window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});

/*$(function(){
    var topButton=$('#pageTop');
    topButton.hide();
    
    //ボタンの表示設定
    $(window).scroll(function(){
    if($(this).scrollTop()>80){
        // 画面を80pxスクロールしたら、ボタンを表示する
        topButton.fadeIn();
        }else{
        // 画面が80pxより上なら、ボタンを表示しない
        topButton.fadeOut();
        }
    });
    
    // ボタンをクリックしたら、スクロールして上に戻る
    topButton.click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;
        });
    });*/