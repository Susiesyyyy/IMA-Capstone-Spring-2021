let opening = document.getElementById("opening");
let start = document.getElementById("start");
let intro1 = document.getElementById("intro1");
let homepage = document.getElementById("homepage");
let iconbtn1 = document.getElementById("iconbtn1");
let icon1intro = document.getElementById("icon1intro");
let iconbtn2 = document.getElementById("iconbtn2");
let icon2intro = document.getElementById("icon2intro");
let iconbtn3 = document.getElementById("iconbtn3");
let icon3intro = document.getElementById("icon3intro");
let iconbtn4 = document.getElementById("iconbtn4");
let icon4intro = document.getElementById("icon4intro");

// opening.onended = function(){
//   intro1.style.display = "block";
// };

// setTimeout(function(){
//   intro1.style.display = "block";
// }, 8000);
//
// setTimeout(function(){
//   start.style.display = "block";
// },14000);

function gotohome(){
  opening.style.display = "none";
  intro1.style.display = "none";
  start.style.display = "none";
  homepage.style.display = "block";
}

iconbtn1.addEventListener("mouseover", function(){
  icon1intro.style.display = "block";
}
);
iconbtn1.addEventListener("mouseout", function(){
  icon1intro.style.display = "none";
}
);

iconbtn2.addEventListener("mouseover", function(){
  icon2intro.style.display = "block";
}
);
iconbtn2.addEventListener("mouseout", function(){
  icon2intro.style.display = "none";
}
);

iconbtn3.addEventListener("mouseover", function(){
  icon3intro.style.display = "block";
}
);
iconbtn3.addEventListener("mouseout", function(){
  icon3intro.style.display = "none";
}
);

iconbtn4.addEventListener("mouseover", function(){
  icon4intro.style.display = "block";
}
);
iconbtn4.addEventListener("mouseout", function(){
  icon4intro.style.display = "none";
}
);
// function introduction(){
//   window.location.href = 'introduction.html';
// }
//
// function map(){
//   window.location.href = 'map.html';
// }
//
// function story(){
//   window.location.href = 'story.html';
// }
//
// function refer(){
//   window.location.href = 'refer.html';
// }
