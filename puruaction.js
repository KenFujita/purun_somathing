// CSSアニメーションをループ再生する処理
$(function(){
  $("#obj").click(function(){
    if($(this).hasClass('purun')){
      $(this).removeClass('purun');
      $(this)[0].offsetWidth = $(this)[0].offsetWidth;
    }
    $(this).addClass('purun');
    //$(this).removeClass('purun');
    //$(this).stop(true,true).addClass("purun");
  });
});
/*
function looopAnimation(id,className,delay){
  var element = document.getElementById(id);
  element.addEventListener("animationend",listener);

  function listener(event){
    event.target.classList.remove(className);
    setTimeout(playAnimation,delay);
  }

  function playAnimation(){
    element.classList.add(className);
  }
}
*/
