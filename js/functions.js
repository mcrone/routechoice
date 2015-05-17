function StartRoute(time) {
  time = document.getElementById('inputtime').value;
  document.getElementById('img1').style.display='none';
  document.getElementById('img2').style.display='block';
  //$('#img2')
  //.wrap('<span style="display:inline-block"></span>')
  //.css('display', 'block')
  //.parent()
  //.zoom({on:'click', magnify:1.5});
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


function RevealRoute() {
  document.getElementById('img1').style.display='none';
  document.getElementById('img2').style.display='none';
  document.getElementById('img3').style.display='block';
  $('#resetbutton').removeAttr('disabled');
  $('#resetbuttonmobile').removeAttr('disabled');
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  document.getElementById('startbutton').disabled='true';
  document.getElementById('startbuttonmobile').disabled='true'
};

function ResetRoute() {
  document.getElementById('img1').style.display='block';
  document.getElementById('img2').style.display='none';
  document.getElementById('img3').style.display='none';
  document.getElementById('resetbutton').disabled='true';
  document.getElementById('resetbuttonmobile').disabled='true';
  document.getElementById('revealbutton').disabled='true';
  document.getElementById('revealbuttonmobile').disabled='true';
  $('#startbutton').removeAttr('disabled');
  $('#startbuttonmobile').removeAttr('disabled');
};

function NextSprint(num) {
      window.location.href = '/sprint/sprint' + (num+1) + '.html';      
};

function PreviousSprint(num) {
      window.location.href = '/sprint/sprint' + (num-1) + '.html';
};

function NextWoc(num) {
      window.location.href = '/woc/woc' + (num+1) + '.html';      
};

function PreviousWoc(num) {
      window.location.href = '/woc/woc' + (num-1) + '.html';
};

function NextCurrentWeek(num1, num2) {
     window.location.href = '/week/current/week' + num1 + '_' + (num2+1) + '.html';
};

function PreviousCurrentWeek(num1, num2) {
     window.location.href = '/week/current/week' + num1 + '_' + (num2-1) + '.html';
};

function NextWeek(num1, num2) {
    window.location.href = '/week/week' + num1 + '/week' + num1 + '_' + (num2+1) + '.html';
};

function PreviousWeek(num1, num2) {
    window.location.href = '/week/week' + num1 + '/week' + num1 + '_' + (num2-1) + '.html';
};


function showRandomWocPage() {
    var num2 = Math.round(Math.random() * 15);
    window.location.href = "/woc/woc" + num2 + '.html';
    console.log(num);
};

function showRandomSprintPage() {
    var num2 = Math.round(Math.random() * 51);
    window.location.href = "/sprint/sprint" + num2 + '.html';
    console.log(num);
};

function showRandomWeekPage1() {
    var num2 = Math.round(Math.random() * 24)+1;
    window.location.href = "/week/week1/week1_" + num2 + '.html';
    console.log(num);
};

function showRandomCurrentWeekPage(num) {
    var num2 = Math.round(Math.random() * 9)+1;
    window.location.href = "/week/current/week" + num + "_" + num2 + '.html';
    console.log(num);
};

function showRandomWeekPage(num) {
    var num2 = Math.round(Math.random() * 9)+1;
    window.location.href = "/week/week" + num + "/week" + num + "_" + num2 + '.html';
    console.log(num);
};

function MapShortcutsCurrentWeek(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomCurrentWeekPage(week)});
    shortcut.add("D", function() {NextCurrentWeek(week,num)});
    shortcut.add("A", function() {PreviousCurrentWeek(week,num)});
}

function MapShortcutsFirstCurrentWeekPage(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomCurrentWeekPage(week)});
    shortcut.add("D", function() {NextCurrentWeek(week,num)});
}

function MapShortcutsLastCurrentWeekPage(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomCurrentWeekPage(week)});
    shortcut.add("A", function() {PreviousCurrentWeek(week,num)});
}

function MapShortcutsWeek(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage(week)});
    shortcut.add("D", function() {NextWeek(week,num)});
    shortcut.add("A", function() {PreviousWeek(week,num)});
}

function MapShortcutsFirstWeekPage(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage(week)});
    shortcut.add("D", function() {NextWeek(week,num)});
}

function MapShortcutsLastWeekPage(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage(week)});
    shortcut.add("A", function() {PreviousWeek(week,num)});
}

function MapShortcutsWeek1(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage1()});
    shortcut.add("D", function() {NextWeek(week,num)});
    shortcut.add("A", function() {PreviousWeek(week,num)});
}

function MapShortcutsFirstWeek1Page(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage1()});
    shortcut.add("D", function() {NextWeek(week,num)});
}

function MapShortcutsLastWeek1Page(week,num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWeekPage1()});
    shortcut.add("A", function() {PreviousWeek(week,num)});
}

function MapShortcutsSprintPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomSprintPage()});
    shortcut.add("D", function() {NextSprint(num)});
    shortcut.add("A", function() {PreviousSprint(num)});
}

function MapShortcutsFirstSprintPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomSprintPage()});
    shortcut.add("D", function() {NextSprint(num)});
}

function MapShortcutsLastSprintPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomSprintPage()});
    shortcut.add("A", function() {PreviousSprint(num)});
}

function MapShortcutsWocPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWocPage()});
    shortcut.add("D", function() {NextWoc(num)});
    shortcut.add("A", function() {PreviousWoc(num)});
}

function MapShortcutsFirstWocPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWocPage()});
    shortcut.add("D", function() {NextWoc(num)});
}

function MapShortcutsLastWocPage(num){
    shortcut.add("W", function() {StartRoute()});
    shortcut.add("S", function() {RevealRoute()});
    shortcut.add("R", function() {ResetRoute()});
    shortcut.add("Space", function() {showRandomWocPage()});
    shortcut.add("A", function() {PreviousWoc(num)});
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



