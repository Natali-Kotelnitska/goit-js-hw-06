// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rangeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeControlEl.addEventListener('change', onTextSizeChange);

function onTextSizeChange(event) {
  console.log(event.currentTarget);
  textEl.style.fontSize = event.currentTarget.value + 'px';
  console.log(event.currentTarget.value);
}