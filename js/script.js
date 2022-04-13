var currentno = 0;

function increment(x) {
  plus = Number(document.getElementById('number').innerHTML);
  plus = plus+1
  document.getElementById('number').innerHTML = plus;
}

function decrement(y) {
  minus = Number(document.getElementById('number').innerHTML);
  minus = minus-1;
  document.getElementById('number').innerHTML = minus;
}

function alertbox() {
  alert("Hello there!")
}

function loaded() {
  alert("Hello TEJ !!")
}
