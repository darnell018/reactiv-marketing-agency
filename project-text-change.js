

function textChanger () {
  var things = ['marketing', 'graphic design', 'video', 'website', 'social media', 'digital'];
  var thing = things[Math.floor(Math.random() * things.length)];

  var replaceText = document.getElementsByClassName('textChanger')[0].innerHTML;

  console.log(thing)
  console.log(replaceText)

  document.getElementsByClassName('textChanger')[0].innerHTML = thing
}

// onload(textChanger)

// document.addEventListener('DOMContentLoaded', textChanger());


// setInterval(function () {
//   textChanger()
// }, 750)