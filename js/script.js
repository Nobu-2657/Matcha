window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button'); // メニューボタン
    var $menu = document.querySelector('.header-site-menu'); // メニュー
    $button.addEventListener('click', function () { // メニューボタンをクリックしたとき
        if ($menu.classList.contains('is-show')) { // メニューが表示されているとき
            $menu.classList.remove('is-show'); // メニューを非表示にする
        }
        else {
            $menu.classList.add('is-show'); // メニューを表示する
        }
    });
});

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});
