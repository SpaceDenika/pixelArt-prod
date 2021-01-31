let template = document.querySelector('.template').content;
let pixelItem = template.querySelector('.pixel__item');
let containerPixel = document.querySelector('.pixel__board');
let color = document.querySelector('.control__input_type_color');
let eraser = document.querySelector('.control__input_type_eraser')
let clearButton = document.querySelector('.control__button_type_clear');
let fillButton = document.querySelector('.control__button_type_fill');
let pixelImage = document.querySelector('.pixel__image');
let media_1 = window.matchMedia('(min-width: 1367px)');
let media_2 = window.matchMedia('(max-width: 1366px)');
let media_3 = window.matchMedia('(max-width: 1023px)');
let media_4 = window.matchMedia('(max-width: 767px)');
let media_5 = window.matchMedia('(max-width: 639px)');
let media_6 = window.matchMedia('(max-width: 424px)');
let media_7 = window.matchMedia('(max-width: 374px)');
let media_8 = window.matchMedia('(max-width: 319px)');
let mainContainer = document.querySelector('.pixel__container');
let clone = [];

const animation = () => {
  if (pixelImage.classList.contains('pixel__image_animation_1') !== true) {
    pixelImage.classList.remove('pixel__image_animation_2');
    pixelImage.classList.add('pixel__image_animation_1');
  } else {
    pixelImage.classList.remove('pixel__image_animation_1');
    pixelImage.classList.add('pixel__image_animation_2');
  }
}


pixelImage.addEventListener('click', animation);


const addPixel = (num) => {
  for (let i = 0; i < num; i++) {
    clone[i] = pixelItem.cloneNode();
    containerPixel.append(clone[i]);
  }
}

// addPixel(4116);

const removePixel = () => {
  let items = mainContainer.querySelectorAll('.pixel__item')
    for (let item of items) {
      item.remove();
    }
}

const paint = () => {
  for (let i = 0; i < clone.length; i++) {
    clone[i].onclick = function () {
      clone[i].style.backgroundColor = color.value;
    };
  }
};

paint();


const useEraser = () => {
  for (let i = 0; i < clone.length; i++) {
    clone[i].onclick = function () {
      if (eraser.checked) {
        clone[i].style.backgroundColor = 'white';
      } else {
        clone[i].style.backgroundColor = color.value;
      }
    }
  }
}

useEraser();

const clear = () => {
  for (let i = 0; i < clone.length; i++) {
      clone[i].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clear);

const fill = () => {
  for (let i = 0; i < clone.length; i++) {
      clone[i].style.backgroundColor = color.value;
    }
}

fillButton.addEventListener('click', fill);

const mediaQuery_1 = () => {
  if (media_1.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(5060);
  } 
  paint();
  useEraser();
}

mediaQuery_1();
window.addEventListener('resize', mediaQuery_1);

const mediaQuery_2 = () => {
  if (media_2.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(4116);
  } 
  paint();
  useEraser();
}

mediaQuery_2();
window.addEventListener('resize', mediaQuery_2);

const mediaQuery_3 = () => {
  if (media_3.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(1625);
  } 
  paint();
  useEraser();
}

mediaQuery_3();
window.addEventListener('resize', mediaQuery_3);


const mediaQuery_4 = () => {
  if (media_4.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(810);
  } 
  paint();
  useEraser();
}

mediaQuery_4();
window.addEventListener('resize', mediaQuery_4);

const mediaQuery_5 = () => {
  if (media_5.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(665);
  } 
  paint();
  useEraser();
}

mediaQuery_5();
window.addEventListener('resize', mediaQuery_5);

const mediaQuery_6 = () => {
  if (media_6.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(1152);
  } 
  paint();
  useEraser();
}

mediaQuery_6();
window.addEventListener('resize', mediaQuery_6);

const mediaQuery_7 = () => {
  if (media_7.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(800);
  } 
  paint();
  useEraser();
}

mediaQuery_7();
window.addEventListener('resize', mediaQuery_7);

const mediaQuery_8 = () => {
  if (media_8.matches) {
    removePixel();
    mainContainer.append(containerPixel);
    addPixel(589);
  } 
  paint();
  useEraser();
}

mediaQuery_8();
window.addEventListener('resize', mediaQuery_8);