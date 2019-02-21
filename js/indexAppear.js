let section = document.querySelectorAll('section');
let img = document.querySelectorAll('.section3 div:not(:nth-child(2))');
let div = document.querySelector('.section3 div:nth-child(2)');
let footer = document.querySelector('footer');

let array = [];

for (let i = 1; i < section.length; i++) { array.push(section[i]); }

for (let i = 0; i < img.length; i++) { array.push(img[i]); }
array.push(div);
array.push(footer);

for (let i = 0; i < array.length; i++) {
  var waypoint = new Waypoint({
    element: array[i],
    handler: function() {
      array[i].style.transform = 'none';
      array[i].style.opacity = '1';
    },
    offset: '100%'
  });
};
