function StartRoute(time) {
  time = document.getElementById('inputtime').value;
  document.getElementById('img1').style.display='none';
  document.getElementById('img3').style.display='none';
  $('#img2')
  .wrap('<span style="display:inline-block"></span>')
  .css('display', 'block')
  .parent()
  .zoom({on:'click', magnify:1.5});
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  document.getElementById('resetbutton').disabled='true';
  document.getElementById('resetbuttonmobile').disabled='true';
  document.getElementById('startbutton').disabled='true';
  document.getElementById('startbuttonmobile').disabled='true' 
  setTimeout(function(){
  document.getElementById('img1').style.display='block';
  document.getElementById('img3').style.display='none';
  document.getElementById('img2').style.display='none';
  $('#revealbutton').removeAttr('disabled');
  $('#revealbuttonmobile').removeAttr('disabled');
  $('#startbutton').removeAttr('disabled');
  $('#startbuttonmobile').removeAttr('disabled');
}, time*1000);
};


function RevealRoute() {
  document.getElementById('img1').style.display='none';
  document.getElementById('img3').style.display='block';
  document.getElementById('img2').style.display='none';
  $('#resetbutton').removeAttr('disabled');
  $('#resetbuttonmobile').removeAttr('disabled');
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  document.getElementById('startbutton').disabled='true';
  document.getElementById('startbuttonmobile').disabled='true'
};

function ResetRoute() {
  document.getElementById('img1').style.display='block';
  document.getElementById('img3').style.display='none';
  document.getElementById('img2').style.display='none';
  document.getElementById('resetbutton').disabled='true';
  document.getElementById('resetbuttonmobile').disabled='true';
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  $('#startbutton').removeAttr('disabled');
  $('#startbuttonmobile').removeAttr('disabled');
};

function URL_add_parameter(url, param, value){
    var hash       = {};
    var parser     = document.createElement('a');

    parser.href    = url;

    var parameters = parser.search.split(/\?|&/);

    for(var i=0; i < parameters.length; i++) {
        if(!parameters[i])
            continue;

        var ary      = parameters[i].split('=');
        hash[ary[0]] = ary[1];
    }

    hash[param] = value;

    var list = [];
    Object.keys(hash).forEach(function (key) {
        list.push(key + '=' + hash[key]);
    });

    parser.search = '?' + list.join('&');
    return parser.href;
}

function NextSprint(num) {
      /*window.location.href = '/sprint/sprint' + (num+1) + '.html';   */
    num = ++num
    if (num < 200){
        location.href = URL_add_parameter(location.href, 'num', num)}
    else {
        max = 200
        location.href = URL_add_parameter(location.href, 'num', max);
    }
    /*window.location.search += '&num=' + num*/
};

function Previous(num) {
      /*window.location.href = '/sprint/sprint' + (num-1) + '.html';*/
    num = --num
    if (num > 0){
        location.href = URL_add_parameter(location.href, 'num', num)}
    else {
        location.href = URL_add_parameter(location.href, 'num', 0);
    }
};

function NextWoc(num) {
    num = ++num
    if (num < 20){
        location.href = URL_add_parameter(location.href, 'num', num)}
    else {
        max = 20
        location.href = URL_add_parameter(location.href, 'num', max);
    }
};

function Nextfc(num) {
    num = ++num
    if (num < 4){
        location.href = URL_add_parameter(location.href, 'num', num)}
    else {
        max = 4
        location.href = URL_add_parameter(location.href, 'num', max);
    }
};


function showRandomWocPage() {
    var num2 = Math.round(Math.random() * 20);
    location.href = URL_add_parameter(location.href, 'num', num2)
};

function showRandomSprintPage() {
    var num2 = Math.round(Math.random() * 200);
    location.href = URL_add_parameter(location.href, 'num', num2)
};


function showRandomfcPage() {
    var num2 = Math.round(Math.random() * 3)+1;
    location.href = URL_add_parameter(location.href, 'num', num2)
};

function MapShortcutsSprintPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomSprintPage()});
    shortcut.add("D", function() {NextSprint(num)});
    shortcut.add("A", function() {Previous(num)});
}

function MapShortcutsWocPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWocPage()});
    shortcut.add("D", function() {NextWoc(num)});
    shortcut.add("A", function() {Previous(num)});
}


function Initialise() {
    $(document).foundation();
    
    $(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:8000,
      infinite:true,
      arrows:false,
      dots:true,
      fade:true,
      pauseOnHover:false,
      speed: 300
    });
    });
};



