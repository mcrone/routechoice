function StartRoute(time) {
  time = document.getElementById('inputtime').value;
  document.getElementById('img1').style.display='none';
  document.getElementById('img2').style.display='block';
  document.getElementById('img3').style.display='none';
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  document.getElementById('resetbutton').disabled='true';
  document.getElementById('resetbuttonmobile').disabled='true';
  document.getElementById('startbutton').disabled='true';
  document.getElementById('startbuttonmobile').disabled='true'
  setTimeout(function(){
  document.getElementById('img1').style.display='block';
  document.getElementById('img2').style.display='none';
  document.getElementById('img3').style.display='none';
  $('#revealbutton').removeAttr('disabled');
  $('#revealbuttonmobile').removeAttr('disabled');
  $('#startbutton').removeAttr('disabled');
  $('#startbuttonmobile').removeAttr('disabled');
}, time*1000);
};
