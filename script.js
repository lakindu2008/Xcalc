
let BodyColor = document.getElementById('body');
let Color = document.getElementById('DarkThem');
let AllbtnColor = document.getElementById('Them3');

Color.addEventListener('click',function(){
      BodyColor.style.background = 'rgb(80, 79, 79)';
      AllbtnColor.style.background = ' rgb(22, 21, 21)';
      AllbtnColor.style.color = 'white';
      AllbtnColor.style.boxShadow = '0px 0px 0px 0px '
      let Input = document.getElementById('Display').style.color = 'white';
      let InputColor = document.getElementById('Display').style.background = 'rgba(17, 17, 17, 0.795)'
});
//settings exit part

let Close = document.getElementById('Exit');
let menu = document.getElementById('Menu');
Close.addEventListener('click',function(){
      menu.style.display = 'none';
});

//settins tab open part

let Open = document.getElementById('MenuOpen');

Open.addEventListener('click',function(){
      menu.style.display = 'inline';
})