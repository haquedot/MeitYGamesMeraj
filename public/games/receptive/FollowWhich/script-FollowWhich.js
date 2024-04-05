const fruits = [
    { name: 'apple', color: 'red', image: 'apple.jpg' },
    { name: 'banana', color: 'yellow', image: 'banana.jpg' },
    { name: 'orange', color: 'orange', image: 'orange.jpg' },
    { name: 'mango', color: 'yellow', image: 'mango.jpg' },
    { name: 'pomegranate', color: 'red', image: 'pomegranate.jpg' },
    { name: 'dragon', color: 'pink', image: 'dragon.jpg' },
    { name: 'guava', color: 'green', image: 'guava.jpg' },
  ];
  


  function pauseClicked() {
    var button = document.querySelector('.pause_button');
    var icon = button.querySelector('i');

    // Toggle between pause and play icon
    if (icon.classList.contains('bi-pause-fill')) {
      icon.classList.remove('bi-pause-fill');
      icon.classList.add('bi-caret-right-fill');
    } else {
      icon.classList.remove('bi-caret-right-fill');
      icon.classList.add('bi-pause-fill');
    }
  }