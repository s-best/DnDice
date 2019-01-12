const rollOutcome = document.querySelector('.result');

const d20Button = document.querySelector('.d20');
const d12Button = document.querySelector('.d12');
const d10Button = document.querySelector('.d10');
const d8Button = document.querySelector('.d8');
const d6Button = document.querySelector('.d6');
const d4Button = document.querySelector('.d4');
const clearButton = document.querySelector('.clear');

d20Button.onclick = function rollD20() {
  const d20Result = Math.floor(Math.random() * 20) + 1;
  rollOutcome.innerHTML = d20Result;
};

d12Button.onclick = function rollD12() {
  const d12Result = Math.floor(Math.random() * 12) + 1;
  rollOutcome.innerHTML = d12Result;
};

d10Button.onclick = function rollD10() {
  const d10Result = Math.floor(Math.random() * 10) + 1;
  rollOutcome.innerHTML = d10Result;
};

d8Button.onclick = function rollD8() {
  const d8Result = Math.floor(Math.random() * 8) + 1;
  rollOutcome.innerHTML = d8Result;
};

d6Button.onclick = function rollD6() {
  const d6Result = Math.floor(Math.random() * 6) + 1;
  rollOutcome.innerHTML = d6Result;
};

d4Button.onclick = function rollD4() {
  const d4Result = Math.floor(Math.random() * 4) + 1;
  rollOutcome.innerHTML = d4Result;
};

clearButton.onclick = function clearResult() {
  rollOutcome.innerHTML = "";
};