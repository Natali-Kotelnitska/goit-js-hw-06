// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');

function setCounterValue() {
  document.getElementById('value').textContent = counterValue;
}

function increment() {
  counterValue += 1;
  setCounterValue();
}

function decrement() {
  counterValue -= 1;
  setCounterValue();
}

incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);
