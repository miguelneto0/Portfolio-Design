document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    var prev = document.querySelector('.gallery__prev');
    var next = document.querySelector('.gallery__next');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    });

    var stream2 = document.querySelector('.gallery__stream2');
    var items2 = document.querySelectorAll('.gallery__item2');
    var prev2 = document.querySelector('.gallery__prev2');
    var next2 = document.querySelector('.gallery__next2');

    prev2.addEventListener('click', function() {
        stream2.insertBefore(items2[items2.length - 1], items2[0]);
        items2 = document.querySelectorAll('.gallery__item2');
      });
    
      next2.addEventListener('click', function() {
        stream2.appendChild(items2[0]);
        items2 = document.querySelectorAll('.gallery__item2');
      });
  

  var stream3 = document.querySelector('.gallery__stream3');
    var items3 = document.querySelectorAll('.gallery__item3');
    var prev3 = document.querySelector('.gallery__prev3');
    var next3 = document.querySelector('.gallery__next3');

    prev3.addEventListener('click', function() {
        stream3.insertBefore(items3[items3.length - 1], items3[0]);
        items3 = document.querySelectorAll('.gallery__item3');
      });
    
      next3.addEventListener('click', function() {
        stream3.appendChild(items3[0]);
        items3 = document.querySelectorAll('.gallery__item3');
      });
  });