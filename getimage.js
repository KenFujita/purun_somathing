$(function(){
  $('#getfile').on('change',function(e){
    var reader = new FileReader();
    reader.onload = function(e){
      $('#opy').attr('src',e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});
