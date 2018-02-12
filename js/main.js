document.addEventListener('DOMContentLoaded', function() {

  var statusEle = document.querySelector('h1.status');
  statusEle.innerHTML = 'DOM loaded!';

  var switchEle = document.querySelector('div.plate button');

  switchEle.addEventListener('click', function(eventObject) {
    switchClasses = eventObject.target.classList;
    bodyClasses = document.body.classList;
    if (switchClasses.contains('on')) {
      switchClasses.add('off');
      switchClasses.remove('on');
      bodyClasses.add('dark');
      bodyClasses.remove('light');
      statusEle.innerHTML = "Hey, who turned off the lights?"
    } else if (switchClasses.contains('off')) {
      switchClasses.add('on');
      switchClasses.remove('off');
      bodyClasses.add('light');
      bodyClasses.remove('dark');
      statusEle.innerHTML = "It\'s so bright in here!"
    }
  });
});
