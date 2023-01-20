$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.toggle_btn').click(function() {
      // #headerにopenクラスが存在する場合
      if ($('#header').hasClass('open')) {
        // openクラスを削除
        // openクラスを削除すると、openクラスのCSSがはずれるため、
        // メニューが非表示になる
        $('#header').removeClass('open');
  
      // #headerにopenクラスが存在しない場合
      } else {
        // openクラスを追加
        // openクラスを追加すると、openクラスのCSSが適応されるため、
        // メニューが表示される
        $('#header').addClass('open');
      }
    });
  
    // メニューが表示されている時に画面をクリックした場合
    $('#mask').click(function() {
      // openクラスを削除して、メニューを閉じる
      $('#header').removeClass('open');
    });

    /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  // BBBが選ばれる理由（スライド左）
  $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
  });
  // BBBが選ばれる理由（スライド右）
  $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('slide-right');
    }
  });
  // 受講生の声（ふきだし）
  $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass('balloon');
    }
  });


  });

  