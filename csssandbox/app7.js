 let a = 33 + 30 * 27;
let b = 27 * 30 + 33;
const div = document.querySelector('.js');

if (a-b == b -a) {
    div.innerHTML = a / b;
}else{
    div.innerHTML = a * 3 * b;
}

let x = 20;
function func(a,b){
    div.innerHTML = a * b;
}

func(x, 5);

x = 1;

y = x + ++x;

div.innerHTML = y;

x = NaN;

if (NaN) {
    div.innerHTML = x;
}else{
    div.innerHTML = !x;
}

x = 2;

for (let i = 0; i < 4; i++) {
    div.innerHTML = x +=2;
}

for (let i = 0; i < 999; i++) {
    div.innerHTML = i;  
}

a = 8;
a = a + a /(a % 3);
div.innerHTML = a;

x = 1;
x = ++x;
x = --x;
div.innerHTML = x;

x = 1;
div.innerHTML = isNaN(--x/x);

let m = 9;
let n = 12;

div.innerHTML = m;

x = true;
y = false;
if (x && y) {
    div.innerHTML = 'yes';
}else{
    div.innerHTML = 'no';
}

a = true;
b = false;
let c = (a && b) || (a || b);
div.innerHTML = c;

a = 3;
b = 2;
let z = (++b + a--)%5
div.innerHTML = z;

const mod = document.getElementById('#box-4');
// div.innerHTML = mod.childNodes[1].value = 'Hola';
mod.innerHTML = mod.insertAdjacentText('h3', textInput.value ='h3');