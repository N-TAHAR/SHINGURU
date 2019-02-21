let section = document.querySelectorAll('section');
let footer = document.querySelector('footer');
let array = [];

for (let i = 0; i < section.length; i++) { array.push(section[i]); }

array.push(footer);

for (let i = 0; i < array.length; i++) {
  var waypoint = new Waypoint({
    element: array[i],
    handler: function() {
      array[i].style.transform = 'none';
      array[i].style.opacity = '1';
    },
    offset: '80%'
  });
};